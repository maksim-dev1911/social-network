import React from "react";
import './App.css';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/Header-container";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import PreloaderTwo from "./components/common/Preloader/preloader-2";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
            <React.Suspense fallback={<div></div>}>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer/>}/>
                <Route path="/users"
                       render={() => <UsersContainer/>}/>
            </React.Suspense>
        </>
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