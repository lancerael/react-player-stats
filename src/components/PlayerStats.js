import React, { Component } from 'react';
import 'whatwg-fetch';
import PlayerRow from './PlayerRow';

class PlayerStats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/ldabiralai/cf1588cd80fed41661adecb2e3ca9704/raw/8df6831c33c1b0c178a533e8953a61d11434f220/headtohead.json')
      .then(response => response.json())
      .then(data => this.setState({ players: data.players }));
  }

  render() {
    return (
      <div className="rps-container">
        {this.state.players.map((player, i) =>
          <PlayerRow key={`player${i}`} player={player}/>
        )}
      </div>
    );
  }

}

export default PlayerStats;
