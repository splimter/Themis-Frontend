import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env)
export const http = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});
