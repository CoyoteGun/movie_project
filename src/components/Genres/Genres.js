import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

import './Genres.css';

import {genreActions} from "../../redux";

export const Genres = () => {

    const navigate = useNavigate();

    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenres())
    },[dispatch])

    return (
        <div className={'genres'}>
            {genres && genres.map(item => {
                const {id, name} = item;

                return (
                    <div key={id} className={'genres_block'}>
                        <Link className={'genre_links'} onClick={() => navigate(`list/${id}`)} to={''}>{name}</Link>
                    </div>
                )
            })}
        </div>
    );
};