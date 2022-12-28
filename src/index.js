import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";

import { AuthContextProvider } from "./context/authContext";
import { SearchContextProvider } from "./context/searchContext";

import App from './components/app/app';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <Router>
          <App />
        </Router>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
