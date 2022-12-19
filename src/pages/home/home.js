import React from 'react';

import HeaderWrapper from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';

import {
  HomePageWrapper,
} from './styled';
import Search from '../../components/search/search';
import Featured from '../../components/featured/featured';
import PropertyList from '../../components/propertyList/propertyList';
import FeaturedProperties from '../../components/featuredProperties/featuredProperties';

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
      <div className="container">
        <Featured />
        <h2 className="homeTitle">Browse by property type</h2>
        <PropertyList />
        <h2 className="homeTitle">Homes guests love</h2>
        <FeaturedProperties />
      </div>

    </HomePageWrapper>
  );
};

export default HomePage;
