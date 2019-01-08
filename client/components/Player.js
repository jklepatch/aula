import React, { Fragment }  from 'react';
import PropTypes from 'prop-types'; 

const Player = ({song}) => {
  return (
    <Fragment>
      <h2>Listenining to {song && song.title}</h2>
      <audio controls src={song && song.fileRef} />
    </Fragment>
  );
};

Player.propTypes = {
  song: PropTypes.object,
};

export default Player;

