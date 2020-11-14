import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()

export const SERVER_URL = process.env.REACT_APP_SERVER_URL

export const http = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});

