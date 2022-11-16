import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'ccfc3f7d5d7e3d1090de1732c7f8fb26',
        language: 'es-ES'
    }
})


export default movieDB;