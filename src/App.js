import "./App.css";
import React, { Component } from "react";
import MainPage from "./MainPage/MainPage.js";
import LeftBar from "./LeftBar/LeftBar.js";
import BottomBar from './BottomBar/BottomBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      playlists: [],
      recommend: [],
      recently: [],
      listSearch: "",
    };
  }

  componentDidMount() {
    fetch("http://zmdp.cloud/iseAlim/spotify.json")
      .then((response) => response.json())
      .then((res) =>
        this.setState({
          playlists: res.allPlaylists,
          recommend: res.recommended,
          recently: res.recentlyPlayed,
        })
      );
  }

  onSearchChange = (event) => {
    this.setState({ listSearch: event.target.value });
  };

  render() {
    const filteredLists = this.state.playlists.filter((lists) => {
      return lists.name
        .toLowerCase()
        .includes(this.state.listSearch.toLowerCase());
    });

    return (
      <div className=" App" style={{ height: "100vh", minHeight: "100%" }}>
        <div
          className="d-flex flex-row justify-content-between "
          style={{ height: "85vh", minHeight: "85%" }}
        >
          <LeftBar
            filteredLists={filteredLists}
            onSearchChange={this.onSearchChange}
          />
          <MainPage
            recentlyPlayed={this.state.recently}
            recommend={this.state.recommend}
          />
        </div>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
