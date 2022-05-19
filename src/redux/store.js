import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendsReducer from "./friends-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 12},
                {id: 2, message: 'It\'s my first post', likes: 17},
            ],
            friends: [
                {id: 1, name: 'Maksim'},
                {id: 2, name: 'Anastasia'},
                {id: 3, name: 'Larisa'},
                {id: 4, name: 'Maks'},
                {id: 5, name: 'Andrew'},
                {id: 6, name: 'Dima'},
            ],
            newPostText: 'new news...'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Nice'},
            ],
            dialogs: [
                {id: 1, name: 'Maks'},
                {id: 2, name: 'Anastasia'},
                {id: 3, name: 'Edvard'},
                {id: 4, name: 'Larisa'}
            ],
            newMessageBody: ''
        },
        sideBar: {}
    },
    _callSubscriber() {

    },

    getState() {
      return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._state.friendsReducer = friendsReducer(this._state.friendsReducer, action)

        this._callSubscriber(this._state);
    }
}

window.state = store;
export default store;
