const SEND_MESSAGE = 'SEND_MESSAGE'


let initialState = {
    dialogs: [
        {id: 1, name: 'Maks'},
        {id: 2, name: 'Anastasia'},
        {id: 3, name: 'Edvard'},
        {id: 4, name: 'Larisa'}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Nice'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) =>
    ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;