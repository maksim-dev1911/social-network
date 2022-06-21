import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile, savePhoto,
    updateStatus
} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/preloader";
import {toggleIsFetching} from "../../redux/users-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}
                />

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friendsReducer.friends,
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto,
        toggleIsFetching}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

