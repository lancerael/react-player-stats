import React from 'react';
import PropTypes from 'prop-types';

const PlayerStat = props => <li><strong>{props.stat}</strong> <em>{props.val}</em></li>;

PlayerStat.propTypes = {
  stat: PropTypes.string.isRequired,
  val: PropTypes.number.isRequired
}

export default PlayerStat;
