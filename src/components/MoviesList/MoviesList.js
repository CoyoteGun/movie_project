import {useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {BiSearch} from "react-icons/bi";

import './MovieList.css';

import {movieActions} from "../../redux";
import {baseImgURL, movieRequests} from "../../api";

export const MoviesList = () => {

    const navigate = useNavigate();

    const {movies, prev, next} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page:'1'});

    // useEffect(() => {
    //     dispatch(movieActions.getMovies({page:query.get('page')}))
    // }, [dispatch, query]);

    useEffect(() => {
        // movieRequests.getAll().then(({data}) => dispatch(movieActions.getMovies(data.results)))
        dispatch(movieActions.getMovies())
    },[dispatch, query])


    const [searchValue, setSearchValue] = useState('');

    const searchMovie = (query) => {
        if (query) {
            movieRequests.search(query).then(result => {
                dispatch(movieActions.getMovies(result.data.results))
            });
        }
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
                            <img className={'image'} src={`${baseImgURL}${poster_path}`} alt="-_-"/>
                            <button className={'info_btn'} onClick={() => navigate(`movie/${id}`)}>More Info</button>
                        </div>
                    )
                })}
            </div>
            <div>
                <button  disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
                <button  disabled={!next} onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>
            </div>
        </div>
    );
};