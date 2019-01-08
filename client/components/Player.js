import React, { Fragment }  from 'react';
import PropTypes from 'prop-types'; 
import { FILE_URL } from '../config'; 

const Player = ({song}) => {
  return (
    <Fragment>
      <h2>Listenining to {song && song.title}</h2>
      <audio controls src={song && `${FILE_URL}/${song.fileRef}`} />
    </Fragment>
  );
};

Player.propTypes = {
  song: PropTypes.object,
};

export default Player;

