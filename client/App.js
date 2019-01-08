import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Songs from './components/Songs';
import Player from './components/Player';
import withMetadata from './store/metadata';
import withUI from './store/ui';

class App extends Component {
  componentDidMount = async () => {
    this.props.getMetadataList();
  }

  render() {
    const { metadata, ui } = this.props;
    if(metadata.list.length === 0) return <div>Loading...</div>
      //const metaSelection = metadata.list.filter((m) => m.id === this.state.selection);
    return (
      <div>
        <CssBaseline />
        <div className="header">
          <h1>Aula App!</h1>
        </div>
        <div className="main">
          <Songs songs={metadata.list} />
          <Player song={ui.selectedSong} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getMetadataList: PropTypes.func.isRequired,
  metadata: PropTypes.object,
  ui: PropTypes.object
}

export default withUI(withMetadata(App));
