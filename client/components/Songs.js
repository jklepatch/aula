import React, { Fragment } from 'React';
import PropTypes from 'prop-types';

const formatSong = (song) => {
  return `${song.title} - ${song.fileRef} - ${song.duration}`;
}

const Songs = ({songs}) => {
  return (
    <div className="card songs">
      <h2>Songs</h2>
      <ul>
        {songs.map((song, i) => (
          <li key={i}>{song.title} - {song.fileRef} - <span className="duration">{song.duration}s</span></li>
        ))}
      </ul>
    </div>
  );
};

Songs.propTypes = {
  songs: PropTypes.array
};

export default Songs;
