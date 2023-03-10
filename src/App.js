import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";

import './App.css';

import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages/MoviesPage";
import {Genres, MoviesListCard, TopRated} from "./components";

export const ThemeContext = React.createContext({});


function App() {

    const [theme, setTheme] = useState("dark");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className="App">

                <Routes>

                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index element={<MoviesPage/>}/>
                        <Route path={'movie/:id'} element={<MoviesListCard/>}/>
                        <Route path={'top_rated'} element={<TopRated/>}/>
                        <Route path={'genres'} element={<Genres/>}/>
                    </Route>

                </Routes>
            </div>
        </ThemeContext.Provider>
    );
}

export {App};
