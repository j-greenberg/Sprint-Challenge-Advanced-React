import React from "react";
import "./App.css";
import Login from "./components/Login";
import List from "./components/List";
import axios from "axios";

class App extends React.Component {
  _isMounted = false;

  constructor() {
    super();

    this.state = {
      isLoading: true,
      players: []
    };
  }

  componentDidMount() {
    this._isMounted = true;

    axios
      .get(`http://localhost:5000/api/players`)
      .then(response => {
        console.log("Players successfully retrieved:", response.data);

        if (this._isMounted) {
          this.setState({
            players: response.data,
            isLoading: false
          });
        }
      })

      .catch(error => {
        console.log("Error in retrieving player data: ", error);
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
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
