import React from 'react';

import './VideoItem.scss';

interface Props {
  video: any;
  onVideoSelect: Function;
}

const VideoItem: React.FC<Props> = ({ video, onVideoSelect }) => (
  <div onClick={() => onVideoSelect(video)} className='video-item item'>
    <img
      alt={video.snippet.title}
      className='ui image'
      src={video.snippet.thumbnails.medium.url}
    />
    <div className='content'>
      <div className='header'>{video.snippet.title}</div>
    </div>
  </div>
);

export default VideoItem;
