import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Songs from './components/Songs';
import Player from './components/Player';
import withMetadata from './store/metadata';

class App extends Component {
  state = {
    selection: "1"
  }

  componentDidMount = async () => {
    this.props.getMetadataList();
  }

  render() {
    const { metadata } = this.props;
    if(metadata.list.length === 0) return <div>Loading...</div>
    const metaSelection = metadata.list.filter((m) => m.id === this.state.selection);
    return (
      <div>
        <CssBaseline />
        <div className="header">
          <h1>Aula App!</h1>
        </div>
        <div className="main">
          <Songs songs={metadata.list} />
          <Player song={metaSelection && metaSelection[0]} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getMetadataList: PropTypes.func.isRequired,
  metadata: PropTypes.object
}

export default withMetadata(App);
