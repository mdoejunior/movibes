import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/screen/Main.jsx";
import MovieScreen from "./components/screen/MovieScreen.jsx";
import MovieDetailsScreen from "./components/screen/MovieDetailsScreen.jsx";
import TvSeriesScreen from "./components/screen/TvSeriesScreen.jsx";
import Login from "./components/auth/Login.jsx";
import CreateAccount from "./components/auth/CreateAccount.jsx";
function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/movies'} element={<MovieScreen/>}/>
                <Route path={'/movies-detail/:id'} element={<MovieDetailsScreen/>}/>
                <Route path={'/tv-detail/:id'} element={<TvSeriesScreen/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/signup'} element={<CreateAccount/>}/>
            </Routes>
        </BrowserRouter>
    </>

  )
}

export default App
