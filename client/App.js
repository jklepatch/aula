import React, { Component } from 'react';
import Songs from './components/Songs';
import Player from './components/Player';
import { getMetadataList } from './api';

class App extends Component {
  state = {
    meta: [],
    selection: "1"
  }

  componentDidMount = async () => {
    const resp = await getMetadataList();
    this.setState({meta: resp.data});
  }

  render() {
    const { meta, selection } = this.state;
    const metaSelection = meta.filter((m) => m.id === selection);
    return (
      <div>
        <h1>Aula App!</h1>
        <Songs songs={meta} />
        <Player song={metaSelection && metaSelection[0]} />
      </div>
    );
  }
}

export default App;
