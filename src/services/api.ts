import axios from 'axios';

const api = axios.create({
    baseURL: 'https://75db406afa76.ngrok.io/'
});

export default api;