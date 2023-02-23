import {axiosRequest} from "../../utils";
import {apiKey, baseURL, moviesURL} from "../Endpoints";

const movieRequests = {
    getAll: (page=1) => axiosRequest.get(`${moviesURL}?api_key=${apiKey}`, {params:{page}}),
    getMovieById: (id) => axiosRequest.get(`${baseURL}/movie/${id}?api_key=${apiKey}`)
}

export {
    movieRequests
}