import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {baseImgURL, movieRequests} from "../../api";
import {movieActions} from "../../redux";
import {useNavigate} from "react-router-dom";
import {BiSearch} from "react-icons/bi";

export const TopRated = () => {

    const navigate = useNavigate();

    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        movieRequests.getTopRated(1).then(({data}) => dispatch(movieActions.getMovies(data.results)))
    },[dispatch])

    return (
        <div>
            <div className={'search_block'}>
                <input className={'search_input'} type="text" placeholder={'Search'}/>
                <button className={'search_btn'}><BiSearch className={'icon'}/></button>
            </div>
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
                {/*<button  disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>*/}
                {/*<button  disabled={!next} onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>*/}
            </div>
        </div>
    );
};