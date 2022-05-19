import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 12},
        {id: 2, message: 'It\'s my first post', likes: 17},
    ],
}

test(' message of new post should be', () => {
    let action = addPostActionCreator('it kamasutra');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator("Hi, how are you?");

    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe("Hi, how are you?");
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});

test('after deleting length shouldt be decrement if id is incorrect', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});

