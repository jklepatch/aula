import React, { Fragment } from 'React';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const formatSong = (song) => {
  return `${song.title} - ${song.fileRef} - ${song.duration}`;
}

const Songs = ({songs}) => {
  return (
    <Fragment>
      <h2>Songs</h2>
      <List>
        {songs.map((song, i) => (
          <ListItem key={i}>
            <ListItemText primary={formatSong(song)} />
          </ListItem>
        ))}
      </List>
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
