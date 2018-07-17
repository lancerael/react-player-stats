import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayerData from './PlayerData';

class PlayerRow extends Component {

  render() {
    const player = this.props.player;

    return (
      <div className="rps-row">
        <div className="rps-player">
          <img src={player.picture}/>
        </div>
        <div className="rps-stats">
          <img src={player.country.picture} width="20px" height="14px" title={player.country.code}/>
          <strong>{player.firstname} {player.lastname}</strong>
          <PlayerData data={player.data} />
        </div>
      </div>
    );

  }

}

PlayerRow.propTypes = {
  player: PropTypes.object.isRequired
}

export default PlayerRow;
