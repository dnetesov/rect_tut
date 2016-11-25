import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ytSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import '../scss/app.scss';

const API_KEY = 'AIzaSyBr_A-TvrxmpQiVkGe7fR8xSLnw7G_upbA';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    ytSearch({ key: API_KEY, term: 'React Redux' }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className='container'>
        <SearchBar />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          videos={ this.state.videos }
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
        />
      </div>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
