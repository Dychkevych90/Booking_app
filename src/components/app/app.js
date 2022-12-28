import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import HomePage from '../../pages/home/home';
import List from "../../pages/list/List";
import Hotel from "../../pages/hotel/hotel";
import Login from '../../pages/login/login';

const App = () => {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/hotels" element={ <List /> } />
        <Route path="/hotels/:id" element={ <Hotel /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </div>
  );
};

export default App;
