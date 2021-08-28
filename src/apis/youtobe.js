import axios from 'axios';

const KEY = 'AIzaSyAivpWWk509jXdhDSwolZbkEyHmUz6Nq3s';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
}
});