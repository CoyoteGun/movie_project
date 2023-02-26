import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import StarRatings from "react-star-ratings/build/star-ratings";

import {baseImgURL} from "../../api";
import {movieActions} from "../../redux";
import './TopRated.css'


export const TopRated = () => {

    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getTopMovies())
    }, [dispatch])

    return (
        <div className={'top_rated_block'}>
            {movies && movies.map(item => {
                const {id, poster_path, vote_average, title} = item;

                return (
                    <div className={'rating'} key={id}>
                        <img src={`${baseImgURL}${poster_path}`} alt="Movie title"/>
                        <h3>{title}</h3>
                        <StarRatings
                            rating={vote_average}
                            starRatedColor="gold"
                            numberOfStars={10}
                            name='rating'
                            starDimension="20px"
                            starSpacing="5px"
                        />
                    </div>
                )
            })}
        </div>
    );
};
