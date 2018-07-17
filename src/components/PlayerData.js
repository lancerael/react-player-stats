import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayerStat from './PlayerStat';

class PlayerData extends Component {

  render() {

    const data = this.props.data;

    return (
      <div className="rps-data">
        <ul>
          <PlayerStat stat="Rank" val={data.rank} />
          <PlayerStat stat="Points" val={data.points} />
          <PlayerStat stat="Weight" val={data.weight} />
          <PlayerStat stat="Height" val={data.height} />
          <PlayerStat stat="Age" val={data.age} />
        </ul>
      </div>
    );

  }

}

PlayerData.propTypes = {
  data: PropTypes.object.isRequired
}

export default PlayerData;
