import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <h1>Aula App!</h1>
        <Songs songs={metadata.list} />
        <Player song={metaSelection && metaSelection[0]} />
      </div>
    );
  }
}

App.propTypes = {
  getMetadataList: PropTypes.func.isRequired,
  metadata: PropTypes.object
}

export default withMetadata(App);
