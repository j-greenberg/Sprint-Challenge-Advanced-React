import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import Card from "./components/Card";
import axios from "axios";
import Login from "./components/Login";

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)

      .then(response => {
        console.log("Players successfully retrieved:", response.data);
        this.setState({
          players: response.data
        });
      })

      .catch(error => {
        console.log("Error in retrieving player data: ", error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Sprint Challenge - Advanced React</h1>
        <Login />
        <h2>Player Data: </h2>
        <List players={this.state.players} />
        {/* {this.state.followers.map(object => (
          // <Card details={object} />
        ))} */}
      </div>
    );
  }
}

export default App;
