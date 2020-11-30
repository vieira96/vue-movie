import axios from 'axios';
//https://api.themoviedb.org/3/movie/popular?api_key=8ab9431ad88e200827f790795a5bdc68&language=pt-BR&page=1
const api = axios.create({
    //passei a url base
    baseURL: 'https://api.themoviedb.org/3/movie'
});

export default api;