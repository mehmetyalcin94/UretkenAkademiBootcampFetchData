import React, { Component } from "react";
import Preloading from "./Preloading";
import axios from "axios";

export default class App extends Component {
  state = { loading: true };
  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ loading: false });
      }.bind(this),
      2000
    );
    axios("https://jsonplaceholder.typicode.com/users").then((data) => {
      this.setState({ members: data });
    });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Preloading />
        ) : (
          <ul>
            {this.state.members.data.map((user) => (
              <li key={user.id}>
                <b>{user.username}:</b> {user.name}
                <p></p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
