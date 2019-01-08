import React, { Component, Fragment } from 'React';
import PropTypes from 'prop-types';
import withUI from '../store/ui';

class Songs extends Component {
  formatSong = (song) => {
    return (
      <Fragment>
        {song.title} - <span className="duration">{song.duration}s</span>
    </Fragment>
    );
  }

  onSelect = (song) => {
    this.props.selectSong(song);
  }

  render() {
    const { songs, ui } = this.props;
    return (
      <div className="card songs">
        <h2>Songs</h2>
        <ul>
          {songs.map((song, i) => (
            <li 
              className={ui.selectedSong.id === song.id ? 'selected' : ''}
              onClick={() => this.onSelect(song)} 
              key={i}>
              {this.formatSong(song)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

Songs.propTypes = {
  songs: PropTypes.array,
  ui: PropTypes.object
};

export default withUI(Songs);
