import styled from 'styled-components';

const HotelWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  .bookNow {
    position: absolute;
    top: 10px;
    right: 0;
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }

  .hotelTitle {
    font-size: 24px;
  }

  .hotelAddress {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .hotelDistance {
    color: #0071c2;
    font-weight: 500;
  }

  .hotelPriceHighlight {
    color: #008009;
    font-weight: 500;
  }

  .hotelImages {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .hotelImgWrapper {
    width: 33%;
  }

  .hotelImg {
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  .hotelDetails {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;

    .hotelDetailsTexts {
      flex: 3;
    }

    .hotelDesc {
      font-size: 14px;
      margin-top: 20px;
    }

    .hotelDetailsPrice {
      flex: 1;
      background-color: #ebf3ff;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .hotelDetailsPrice > h1 {
      font-size: 18px;
      color: #555;
    }
    
    .hotelDetailsPrice > span {
      font-size: 14px;
    }
    
    .hotelDetailsPrice > h2 {
      font-weight: 300;
    }
    
    .hotelDetailsPrice > button {
      border: none;
      padding: 10px 20px;
      background-color: #0071c2;
      color: white;
      font-weight: bold;
      cursor: pointer;
      border-radius: 5px;
    }
  }
`;

const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.613);
  z-index: 999;
  display: flex;
  align-items: center;

  .sliderWrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sliderImg{
    width: 80%;
    height: 80vh;
  }

  .close{
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: lightgray;
    cursor: pointer;
  }

  .arrow{
    margin: 20px;
    font-size: 50px;
    color: lightgray;
    cursor: pointer;
  }
`;

const Caption = styled.div`
  position: relative;
  background-color: #003580;
  padding: 10px 0;
`;

const HotelPage = styled.div``;

export {
  HotelWrapper,
  Slider,
  Caption,
  HotelPage
};
