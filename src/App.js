import React from "react";
import './App.css';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/Header-container";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import PreloaderTwo from "./Components/common/Preloader/preloader-2";
import store from "./redux/redux-store";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <PreloaderTwo/>
        }
        const mainRoutes = <>
            <HeaderContainer/>
            <Navbar/>
            <Route path='/profile/:userId?'
                   render={() => <ProfileContainer/>}/>
            <Route path="/dialogs"
                   render={() => <DialogsContainer/>}/>
            <Route path="/users"
                   render={() => <UsersContainer/>}/></>
        return (
            <div className='app-wrapper'>
                <Switch>
                    <Route path="/login"
                           render={() => <Login/>}/>
                    <Route path="/" render={() => mainRoutes}/>
                    {/*<Route path="*" render={ () => <NotFoundPage/>}/>*/}
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>

    )
}

export default SamuraiJSApp;