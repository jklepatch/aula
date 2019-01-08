import React, { Fragment } from 'React';
import PropTypes from 'prop-types';

const Songs = ({songs}) => {
  return (
    <Fragment>
      <h2>Songs</h2>
      <ul>
        {songs.map((song, i) => (
          <li key={i}>{song.title} - {song.fileRef} - {song.duration}</li>
        ))}
      </ul>
    </Fragment>
  );
};

Songs.propTypes = {
  songs: PropTypes.array
};

export default Songs;
