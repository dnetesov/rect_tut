import React, { Component } from 'react';

class VideoListItem extends Component {

  constructor(props) {
    super(props);
    this.imageUrl = props.video.snippet.thumbnails.default.url;
    this.onVideoSelect = props.onVideoSelect;
  }

  render() {
    return (
      <li onClick={ () => { this.onVideoSelect(this.props.video); } } className='list-group-item'>
        <div className='video-list media'>
          <div className='media-left'>
            <img alt='' className='media-object' src={ this.imageUrl } />
          </div>
          <div className='media-body'>
            <div className='media-heding'>
              { this.props.video.snippet.title }
            </div>
          </div>
        </div>
      </li>
    );
  }
}

VideoListItem.propTypes = {
  video: React.PropTypes.shape({
    snippet: React.PropTypes.object
  }),
  onVideoSelect: React.PropTypes.function
};

export default VideoListItem;
