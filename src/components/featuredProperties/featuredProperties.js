import React from 'react';

import useFetch from "../../hooks/useFetch";

import {
  FeaturedPropertiesWrapper,
  FeaturedPropertiesItem,
} from './styled.js';

const images = [
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
];

const FeaturedProperties = () => {
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=3");

  const setRatingName = (rate) => {
    return rate >= 7.5
      ? 'Exelent'
      : rate < 7.5 && rate > 5
        ? 'Good'
        : rate <= 5
          ? 'Bad'
          : null;
  };

  return (
    <FeaturedPropertiesWrapper>
      { loading ? (
        "Loading"
      ) : (
        <>
          { images && data.map((item, img) => { console.log('data2', item, 'images2', images[img]);
            return(
              <FeaturedPropertiesItem key={ item._id }>
                <img
                  src={ images[img] }
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">{ item.name }</span>
                <span className="fpCity">{ item.city }</span>
                <span className="fpPrice">Starting from ${ item.cheapestPrice }</span>
                { item.rating &&
                <div className="fpRating">
                  <button>{ item.rating }</button>
                  <span>{ setRatingName( item.rating ) }</span>
                </div>
                }
              </FeaturedPropertiesItem>
            );}) }
        </>
      ) }
    </FeaturedPropertiesWrapper>
  );
};

export default FeaturedProperties;
