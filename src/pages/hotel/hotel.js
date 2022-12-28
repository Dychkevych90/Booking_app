import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import Navigation from "../../components/navigation/navigation";
import HeaderWrapper from "../../components/header/header";
import Reserve from '../../components/reverse/reverse';
import MailList from '../../components/mailList/mailList';
import Footer from '../../components/footer/footer';


import { SearchContext } from "../../context/searchContext";
import { AuthContext } from "../../context/authContext";
import useFetch from "../../hooks/useFetch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import {
  HotelWrapper,
  Slider,
  Caption,
  HotelPage,
} from './styled.js';

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log('id',id, 'location',location);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [openModal, setOpenModal] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  //TODO: rewrite to arrow func
  //TODO: delete all extra comments
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  console.log('days', dates);
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <HotelPage>
        <Caption>
          <div className="container">
            <Navigation />
            <HeaderWrapper type="list" />
          </div>
        </Caption>
        { loading ? (
          "loading"
        ) : (
          <div className="container">
            { open && (
              <Slider>
                <FontAwesomeIcon
                  icon={ faCircleXmark }
                  className="close"
                  onClick={ () => setOpen(false) }
                />
                <FontAwesomeIcon
                  icon={ faCircleArrowLeft }
                  className="arrow"
                  onClick={ () => handleMove("l") }
                />
                <div className="sliderWrapper">
                  <img
                    src={ data.photos[slideNumber] }
                    alt=""
                    className="sliderImg"
                  />
                </div>
                <FontAwesomeIcon
                  icon={ faCircleArrowRight }
                  className="arrow"
                  onClick={ () => handleMove("r") }
                />
              </Slider>
            ) }
            <HotelWrapper>
              <button className="bookNow">Reserve or Book Now!</button>
              <h1 className="hotelTitle">{ data.name }</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={ faLocationDot } />
                <span>{ data.address }</span>
              </div>
              <span className="hotelDistance">
              Excellent location – { data.distance }m from center
              </span>
              <span className="hotelPriceHighlight">
              Book a stay over ${ data.cheapestPrice } at this property and get a
              free airport taxi
              </span>
              <div className="hotelImages">
                { data.photos?.map((photo, i) => (
                  <div className="hotelImgWrapper" key={ i }>
                    <img
                      onClick={ () => handleOpen(i) }
                      src={ photo }
                      alt=""
                      className="hotelImg"
                    />
                  </div>
                )) }
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">{ data.title }</h1>
                  <p className="hotelDesc">{ data.desc }</p>
                </div>
                <div className="hotelDetailsPrice">
                  <h1>Perfect for a { days }-night stay!</h1>
                  <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                  </span>
                  <h2>
                    <b>${ days * data.cheapestPrice * options.room }</b> ({ days }{ " " }
                    nights)
                  </h2>
                  <button onClick={ handleClick }>Reserve or Book Now!</button>
                </div>
              </div>
            </HotelWrapper>
          </div>
        ) }
        { openModal && <Reserve setOpen={ setOpenModal } hotelId={ id } /> }
      </HotelPage>

      <MailList />
      <Footer />
    </>
  );
};

export default Hotel;
