/* eslint-disable */
import React, { Component } from "react";
import { render } from "react-dom";
import {} from "./src/index.scss";
import Demo from "./src/index.js";
class App extends React.Component {
    render() {
        return <Demo />;
    }
}
render(<App />, document.getElementById("content"));
