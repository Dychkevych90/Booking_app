import React from 'react';

import HeaderWrapper from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';

import {
  HomePageWrapper,
} from './styled';
import Search from '../../components/search/search';

const HomePage = () => {
  return(
    <HomePageWrapper>
      <div className="caption">
        <div className="container">
          <HeaderWrapper />
          <Navigation />
          <h1>Book your first apartment.</h1>
          <p>Find deals on hotels, private accommodation and more...</p>
          <Search />
        </div>
      </div>

    </HomePageWrapper>
  );
};

export default HomePage;
