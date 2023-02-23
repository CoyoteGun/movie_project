import {Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages/MoviesPage";
import {MoviesListCard} from "./components";

function App() {
  return (
    <div className="App">
        <Routes>

            <Route path={'/'} element={<MainLayout/>}>

                <Route index element={<MoviesPage/>}/>
                <Route path={'movie/:id'} element={<MoviesListCard/>}/>
                <Route path={'top_rated'} element={<h1>1</h1>}/>
                <Route path={'something'} element={<h2>2</h2>}/>

            </Route>

        </Routes>
    </div>
  );
}

export {App};
