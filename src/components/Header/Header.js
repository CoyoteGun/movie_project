import {NavLink} from "react-router-dom";

import './Header.css';
import {ThemeToggle} from "../ThemeToggle/ThemeToggle";

export const Header = () => {

    return (
        <div className={'header_block'}>
            <div className={'header_left'}>
                <NavLink className={'links'} to={'/'}>SimpleWayMovie</NavLink>
                <NavLink className={'links'} to={'top_rated'}>Top Rated</NavLink>
                <NavLink className={'links'} to={'genres'}>By Genres</NavLink>
            </div>
            <div className={'header_right'}>
              <ThemeToggle/>
                <div className={'user__prof'}>
                    <p>UA</p>
                </div>
            </div>
        </div>
    );
};