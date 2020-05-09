import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      sortBy: ""
    }
  }

  handleClickAge() {
    this.setState({ sortBy: "age" });
  }

  handleClickName() {
    this.setState({ sortBy: "name" });
  }

  handleClickPoints() {
    this.setState({ sortBy: "points" });
  }

  handleClickRank() {
    this.setState({ sortBy: "rank" });
  }

  render() {
    const {sortBy} = this.state;
    return (
      <BrowserRouter>
        <div className="text-center buttons">
          <header className="text-center">
            <h1>Leaderboard</h1>
          </header>
          <div className="text-center buttons">
            <Link to="/age"><Age click={this.handleClickAge.bind(this)}></Age></Link>
            <Link to="/name"><Name click={this.handleClickName.bind(this)}></Name></Link>
            <Link to="/points"><Points click={this.handleClickPoints.bind(this)}></Points></Link>
            <Link to="/rank"><Rank click={this.handleClickRank.bind(this)}></Rank></Link>
            <Table sortBy={sortBy}></Table>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

