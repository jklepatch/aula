import React, { Component } from 'react';
import Songs from './components/Songs';
import Player from './components/Player';

const meta = [
  {
    "id": "1",
    "title": "Butterflies in love", 
    "fileRef": "Butterflies_In_Love.mp3",
    "duration": "200"
  },
  {
    "id": "2",
    "title": "Hickory dickory dock", 
    "fileRef": "Hickory_Dickory_Dock.mp3",
    "duration": "220"
  }
];

class App extends Component {
  state = {
    meta: [],
    selection: "1"
  }

  componentDidMount = () => {
    //const meta = getMetadata();
    this.setState({meta});
  }

  render() {
    const { meta, selection } = this.state;
    const metaSelection = meta.filter((m) => m.id === selection);
    console.log(metaSelection[0]);
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
