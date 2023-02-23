import {NavLink} from "react-router-dom";

import './Header.css';

export const Header = () => {
    return (
        <div className={'header_block'}>
            <div className={'header_left'}>
                <NavLink className={'links'} to={'/'}>SimpleWayMovie</NavLink>
                <NavLink className={'links'} to={'top_rated'}>Top Rated</NavLink>
                <NavLink className={'links'} to={'something'}>Something</NavLink>
            </div>
            <div className={'header_right'}>
                {/*<div className="page">*/}
                {/*    <input type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input"/>*/}
                {/*    <label htmlFor="themeSwitch" className="theme-switch__label">*/}
                {/*        <span>Switch theme</span>*/}
                {/*    </label>*/}
                {/*</div>*/}
                <div className={'user__prof'}>
                    <p>UA</p>
                </div>
            </div>
        </div>
    );
};