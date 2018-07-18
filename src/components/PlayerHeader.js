import React from 'react';
import PropTypes from 'prop-types';

const PlayerHeader = props => (
  <header>
    <img src={props.country.picture} width="20px" height="14px" title={props.country.code}/>
    <strong>{props.name}</strong>
  </header>
);

PlayerHeader.propTypes = {
  country: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
}

export default PlayerHeader;
