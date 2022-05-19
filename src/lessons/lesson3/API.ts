import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'd74dcaff';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`?apikey=${key}&t=${title}`);
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`?apikey=${key}&t=${title}&type=${type}`);
    }
};


export default API;
