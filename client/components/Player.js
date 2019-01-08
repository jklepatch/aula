import React from 'react';
import PropTypes from 'prop-types'; 
import { FILE_URL } from '../config'; 

const Player = ({song}) => {
  //const { ui } = this.props;
  return (
    <div className="card player">
      <h2>Listenining to <span className="title">{song && song.title}</span></h2>
      <audio autoPlay controls src={song && `${FILE_URL}/${song.fileRef}`} />
    </div>
  );
};

Player.propTypes = {
  song: PropTypes.object
};

export default Player;

