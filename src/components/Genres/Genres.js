import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom";

import './Genres.css';

import {genreActions, movieActions} from "../../redux";
import {movieRequests} from "../../api";

export const Genres = () => {

    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch])

    const getMoviesByGenreId = (id) => {
        let arr = [];
        movieRequests.getAll(1).then((allMovies) => {
            allMovies.data.results.map((res) => {
                if (res['genre_ids'].includes(id)) {
                    arr.push(res);
                }
            })
            dispatch(movieActions.getMoviesByGenreId(arr));
        })
    }

    return (
        <div className={'genres'}>
            {genres && genres.map(item => {
                const {id, name} = item;

                return (
                    <div key={id} className={'genres_block'}>
                        <Link className={'genre_links'} onClick={() => getMoviesByGenreId(id)}>{name}</Link>
                    </div>
                )
            })}
        </div>
    );
};