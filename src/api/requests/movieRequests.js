import {axiosRequest} from "../../utils";
import {apiKey, baseURL, moviesURL} from "../Endpoints";

const movieRequests = {
    getAll: (page) => axiosRequest.get(`${moviesURL}?api_key=${apiKey}&page=${page}`),
    getMovieById: (id) => axiosRequest.get(`${baseURL}/movie/${id}?api_key=${apiKey}`),
    search: (query) => axiosRequest.get(`${baseURL}/search/movie?api_key=${apiKey}&query=${query}`),
    getTopRated: (page) => axiosRequest.get(`${baseURL}/movie/top_rated?api_key=${apiKey}&page=${page}`)
}

export {
    movieRequests
}