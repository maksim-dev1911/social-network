import {authAPI, profileAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'react/auth/SET_USER_DATA';
const SET_USER_PROFILE = 'react/auth/SET_USER_PROFILE';
const GET_CAPTCHA_URL_SUCCESS = 'react/auth/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    currentProfile: null,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
            case SET_USER_PROFILE:
            return {
                ...state, currentProfile: action.payload.profile
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth, captchaUrl) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth, captchaUrl}
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    payload: {profile}
})

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        const profile = await profileAPI.getProfile(id);
        dispatch(setUserProfile(profile.data))
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: "Password or email is incorrect"}));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, null))
    }
}

export default authReducer;