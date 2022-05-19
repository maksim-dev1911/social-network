let initialState = {
    friends: [
        {id: 1, name: 'Maksim'},
        {id: 2, name: 'Anastasia'},
        {id: 3, name: 'Larisa'},
        {id: 4, name: 'Maks'},
        {id: 5, name: 'Andrew'},
        {id: 6, name: 'Dima'},
    ]
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}



export default friendsReducer;