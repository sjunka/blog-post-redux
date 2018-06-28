import React, { Component } from "react";
import  propTypes  from "prop-types";


import { connect } from "react-redux";
import { createPost } from "../actions/postActions";


class PostForm extends Component {
    state = {
        title: "",
        body: ""
    };

    onChange = (event) => {
        this.setState({
           [event.target.name] : event.target.value 
        })
    }

    onSubmit = (event) => {
        event.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        //Call Action 
        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h3>Add Post: </h3>

                <form onSubmit={this.onSubmit}>
                    <fieldset>
                        <legend>Post Form</legend>

                        <div>
                            <label htmlFor="title">Title: </label>
                            <br />
                            <input
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.onChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="title">Body: </label>
                            <br />
                            <textarea
                                name="body"
                                value={this.state.body}
                                onChange={this.onChange}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: propTypes.func.isRequired,
}

export default connect(null, {createPost})(PostForm);
