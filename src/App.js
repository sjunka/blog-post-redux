import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Reusable Components
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

// Redux dependencies
import { Provider } from "react-redux";

//Redux store
import store from "./store"


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to Bloggin Post Application</h1>
                    </header>
                    <PostForm />
                    <hr />
                    <Posts />
                </div>
            </Provider>
        );
    }
}

export default App;
