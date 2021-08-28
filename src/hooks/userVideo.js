import { useState, useEffect } from 'react';
import youtobe from '../apis/youtobe';

const UserVideos = (defaultSearchTerm) => {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, []);

  const search = async (term) => {
    const response = await youtobe.get('/search', {
      params: {
        q: term,
      },
    });
    setVideo(response.data.items);
  };

  return [videos, search];
};

export default UserVideos;
