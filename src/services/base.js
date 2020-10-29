import axios from 'axios';
require('dotenv').config()

export const http = axios.create({
    baseURL: process.env.SERVER_URL
});
