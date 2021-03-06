import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom'
import Github from './Github'
import Xbox from './Xbox'
import Steam from './Steam'
import Deck from './Deck'
import Marvel from './Marvel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Aint no party like an</h3>
            <h1>API Party</h1>
          </div>
          <ul className="nav-links">
            <li>
                <NavLink to="/github">Github API</NavLink>
            </li>
            <li>
                <NavLink to="/xbox">Xbox API</NavLink>
            </li>
            <li>
                <NavLink to="/steam">Steam API</NavLink>
            </li>
            <li>
                <NavLink to="/deck">Deck API</NavLink>
            </li>
            <li>
                <NavLink to="/marvel">Marvel API</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
            <Route path="/github" component={Github} />
            <Route path="/xbox" component={Xbox} />
            <Route path="/steam" component={Steam} />
            <Route path="/deck" component={Deck} />
            <Route path="/marvel" component={Marvel} />
            <Route render={() => <p>To get started, click one of the links above</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
