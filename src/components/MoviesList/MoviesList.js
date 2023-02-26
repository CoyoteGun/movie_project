import {useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {BiSearch} from "react-icons/bi";

import './MovieList.css';

import {movieActions} from "../../redux";
import {baseImgURL, movieRequests} from "../../api";

export const MoviesList = () => {

    const navigate = useNavigate();

    const {movies} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        dispatch(movieActions.getMovies({page: query.get('page')}))
    }, [dispatch, query])

    const searchMovie = (query) => {
        if (query) movieRequests.search(query).then(({data}) => dispatch(movieActions.getSearchMovies(data.results)));
    };

    return (
        <div className={'movies_content'}>
            <div className={'search_block'}>
                <input onChange={event => setSearchValue(event.target.value)} className={'search_input'} type="text" placeholder={'Search'}/>
                <button onClick={() => searchMovie(searchValue)} type={"submit"} className={'search_btn'}><BiSearch className={'icon'}/></button>
            </div>
            <div className={'comment_block'}>
                {movies && movies.map(item => {
                    const {id, poster_path} = item;

                    return (
                        <div key={id} className={'image_block'}>
                            <img className={'image'} src={`${baseImgURL}${poster_path}`} alt="Movie title"/>
                            <br/>
                            <button className={'info_btn'} onClick={() => navigate(`movie/${id}`)}>More Info</button>
                        </div>
                    )
                })}
            </div>
            <div className={'pagination_buttons'}>
                <button onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev</button>
                <button onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next</button>
            </div>
        </div>
    );
};
