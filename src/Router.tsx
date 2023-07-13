import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Projects } from './pages/Projects/Projects';
import { RouterLayout } from './common/RouterLayout';
import { AboutMe } from './pages/AboutMe/AboutMe';
import { Tech } from './pages/Tech/Tech';

export const AppRouter:React.FC<{}> = () => {
    return(
        <Routes>
            <Route path='/' element = {<RouterLayout/>}>
                <Route path='/' element = {<Home/>} />
                <Route path='/projects' element = {<Projects/>} />
                <Route path='/aboutme' element = {<AboutMe/>} />
                <Route path='/tech' element = {<Tech/>} />
            </Route>
            
        </Routes>
    )
}