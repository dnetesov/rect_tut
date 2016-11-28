import _ from 'lodash';
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
    this.videoSearch('react redux');
  }

  videoSearch(term) {
    ytSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 500);

    return (
      <div className='container'>
        <SearchBar onSearchTermChange={ videoSearch } />
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
