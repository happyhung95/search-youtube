import React, { useState, useEffect } from 'react';

import youtube from './apis/youtube.js';
import API_KEY from './apis/config';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './containers/VideoList';

type Data = {
  
}

const App = () => {
  const [videos, setVideos] = useState<object[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<object | null>(null);

  useEffect(() => {
    onTermSubmit('vietnam');
  }, []);

  const onTermSubmit = async (term: string) => {
    const response = await youtube.get('/search', {
      // ? for some unknown reason, axios.create does not have params
      // ? still figuring it out
      params: {
        q: term,
        part: 'snippet',
        maxResults: 8,
        key: API_KEY,
      },
    }).catch(error => console.log(error));
    setVideos([...response.data.items]);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video: object): void => {
    setSelectedVideo(video);
  };

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
  