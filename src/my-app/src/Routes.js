

import Login from "./components/login.component";
import Home from "./components/home.component";

import React from 'react';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home/>}/>
      <Route path="/login" >
        <Route path="" element={<Login/>}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;