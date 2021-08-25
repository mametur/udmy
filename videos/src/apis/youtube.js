import axios from 'axios';


const KEY = 'AIzaSyDg0c5scRyZyuzkQNcz3zzly945RQYX16I';


export default axios.create ({
 baseURL: 'https://www.googleapis.com/youtube/v3',
 params:{
     part: 'snippet',
     maxResults: 5,
     key: KEY,
     type: 'video',
 }
});