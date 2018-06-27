import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <PostForm />
                <hr/>
                <Posts />
            </div>
        );
    }
}

export default App;
