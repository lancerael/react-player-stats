import React, { Component } from 'react';
import 'whatwg-fetch';
import PlayerRow from './PlayerRow';
import { playerEndpoint } from './../endpoints';

class PlayerStats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    fetch(playerEndpoint)
      .then(response => response.json())
      .then(data => this.setState({ players: data.players }));
  }

  render() {
    return (
      <div className="rps-container">
        {this.state.players
          .sort((player1, player2) => player1.data.rank - player2.data.rank)
          .map((player) => <PlayerRow key={player.picture.replace(/\D/g,'')} player={player}/>
        )}
      </div>
    );
  }

}

export default PlayerStats;
