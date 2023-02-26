import {Outlet} from "react-router-dom";
import {useContext} from "react";

import {ThemeContext} from "../App";
import {Header} from "../components";

export const MainLayout = () => {

    const {theme} = useContext(ThemeContext);

    const headerStyle = {
        dark: {
            backgroundImage: 'https://wallpaperaccess.com/full/2773237.jpg',
            color: 'white'
        },
        light: {
            backgroundColor: '#e0e0e0',
            color: 'black'
        },
    }

    const themeStyle = {
        ...(theme === 'light' ? headerStyle.light : headerStyle.dark)
    }

    return (
        <div style={themeStyle}>
            <Header/>
            <Outlet/>
        </div>
    );
};
