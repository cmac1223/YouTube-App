import React, { Component } from 'react';
const API_KEY = 'AIzaSyDUPQojbAIf072mFdR6CGDOq-NcxO6Ii0U';
import YTSearch from 'youtube-api-search';
import SearchBar from './Search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'mobb deep' }, (videos) => {
      this.setState({ videos });
    })
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[1]} />
        <VideoList videos={this.state.videos} />
      </div>
    );

  }
}


export default App;