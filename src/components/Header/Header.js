import {NavLink} from "react-router-dom";

import './Header.css';
import {ThemeToggle} from "../ThemeToggle/ThemeToggle";
import {movieActions} from "../../redux";
import {useDispatch} from "react-redux";

export const Header = () => {

    const dispatch = useDispatch();

    const getAllMovies = () => {
        dispatch(movieActions.getMovies({page: 1}))
    }

    return (
        <div className={'header_block'}>
            <div className={'header_left'}>
                <NavLink className={'links'} to={'/'} onClick={getAllMovies}>SimpleWayMovie</NavLink>
                <NavLink className={'links'} to={'top_rated'}>Top Rated</NavLink>
                {/*<NavLink className={'links'} to={'genres'}>By Genres</NavLink>*/}
            </div>
            <div className={'header_right'}>
              <ThemeToggle/>
                <div className={'user__prof'}>
                    <span>UA</span>
                </div>
            </div>
        </div>
    );
};
