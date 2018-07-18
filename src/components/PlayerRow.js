import React from 'react';
import PropTypes from 'prop-types';
import PlayerHeader from './PlayerHeader';
import PlayerData from './PlayerData';

const PlayerRow = (props) => {

  const player = props.player;

  return (
    <section className="rps-row">
      <div className="rps-player">
        <img src={player.picture}/>
      </div>
      <div className="rps-stats">
        <PlayerHeader country={player.country} name={`${player.firstname} ${player.lastname}`} />
        <PlayerData data={player.data} />
      </div>
    </section>
  );

}

PlayerRow.propTypes = {
  player: PropTypes.object.isRequired
}

export default PlayerRow;
