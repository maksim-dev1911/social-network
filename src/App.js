import React, {Component} from "react";
import './App.css';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/Header-container";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {clearGlobalError, initializeApp, setGlobalError} from "./redux/app-reducer";
import PreloaderTwo from "./components/common/Preloader/preloader-2";
import store from "./redux/redux-store";
import ErrorHandle from "./components/common/Error/errorHandle";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
    catchAllUnhandledErrors = (error) => {
        this.props.setGlobalError(error.type, error.reason.message)
}
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <PreloaderTwo/>
        }
        console.log(this.props.error)
        const mainRoutes = <>
            <HeaderContainer/>
            <Navbar/>
            <React.Suspense fallback={<div></div>}>
                <Switch>
                    <Route exact path='/'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="*" render={() => <NotFoundPage/>}/>
                </Switch>
            </React.Suspense>
        </>
        return (
            <div className='app-wrapper'>
                {this.props.error && <ErrorHandle onClose={this.props.clearGlobalError} error={this.props.error}/>}
                <Switch>
                    <Route path="/login"
                           render={() => <Login/>}/>
                    <Route path="/" render={() => mainRoutes}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    error: state.app.globalError
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp, setGlobalError, clearGlobalError}))(App);

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