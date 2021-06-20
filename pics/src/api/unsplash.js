import axios from 'axios';


export default axios.create ({
    baseURL: 'https://api.unsplash.com/',
    headers:{
       Authorization: 'Client-ID y8mX4m1Ero-khmMlzRcEy1b7vlfl01ouEPMLwAv0FVI'
    }
})