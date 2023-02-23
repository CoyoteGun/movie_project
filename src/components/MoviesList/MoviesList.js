import {useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

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
        movieRequests.getAll(1).then(({data}) => dispatch(movieActions.getMovies(data.results, {page: query.get('page')})))
    },[dispatch, query])

    return (
        <div>
            <div className={'comment_block'}>
                {movies && movies.map(item => {
                    const {id, poster_path} = item;

                    return (
                        <div key={id} className={'comment_content'}>
                            <img src={`${baseImgURL}${poster_path}`} alt="-_-"/>
                            <button onClick={() => navigate(`movie/${id}`)}>More Info</button>
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