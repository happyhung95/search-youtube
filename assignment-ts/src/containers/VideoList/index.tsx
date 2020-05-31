import React from 'react';

import VideoItem from '../../components/VideoItem';

interface Props {
  videos: any[];
  onVideoSelect: Function;
}

const VideoList: React.FC<Props> = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      onVideoSelect={onVideoSelect}
      video={video}
    />
  ));

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
