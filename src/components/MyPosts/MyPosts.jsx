import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../utils/validators/validators";
import {Textarea} from "../common/FormControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {
    let postsElements = [...props.posts].reverse().map(post => <Post message={post.message} likes={post.likes}/>)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <div className={classes.posts_container}>
                <div>
                    <a className={classes.posts_button} href='#'>Posts</a>
                    <AddNewPostFormRedux onSubmit={onAddPost}/>
                    <div className={classes.posts}>
                        {postsElements}
                    </div>
                </div>
            </div>
        </div>
    )
});

const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <img className={classes.share_ava}
                 src="https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg"/>
            <Field name="newPostText" component={Textarea} placeholder="post message..." className={classes.textarea}/>
            <div>
                <button className={classes.share}>Share</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(addNewPostForm)

export default MyPosts;