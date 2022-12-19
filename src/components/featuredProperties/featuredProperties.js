import React from 'react';

import useFetch from "../../hooks/useFetch";

import {
  FeaturedPropertiesWrapper,
  FeaturedPropertiesItem,
} from './styled.js';

const FeaturedProperties = () => {
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=3");
  console.log('hotels', data);
  return (
    <FeaturedPropertiesWrapper>
      { loading ? (
        "Loading"
      ) : (
        <>
          { data.map((item) => (
            <FeaturedPropertiesItem key={ item._id }>
              <img
                src={ item.photos[0] }
                alt=""
                className="fpImg"
              />
              <span className="fpName">{ item.name }</span>
              <span className="fpCity">{ item.city }</span>
              <span className="fpPrice">Starting from ${ item.cheapestPrice }</span>
              { item.rating && <div className="fpRating">
                <button>{ item.rating }</button>
                <span>Excellent</span>
              </div> }
            </FeaturedPropertiesItem>
          )) }
        </>
      ) }
    </FeaturedPropertiesWrapper>
  );
};

export default FeaturedProperties;
