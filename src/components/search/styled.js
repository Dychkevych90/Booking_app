import styled from 'styled-components';

const HeaderSearch = styled.div`
  height: 50px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  max-width: 1440px;
  width: 80%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 0%);
  z-index: 100;

  .headerIcon {
    color: lightgray;
  }

  .headerSearchItem {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .headerSearchInput {
    border: none;
    outline: none;
  }

  .headerSearchText {
    color: lightgray;
    cursor: pointer;
  }

  .date {
    position: absolute;
    top: 50px;
    z-index: 2;
  }

  .options {
    z-index: 2;
    position: absolute;
    top: 50px;
    background-color: white;
    color: gray;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.4);
  }

  .optionItem {
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }

  .optionCounter {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    color: black;
  }

  .optionCounterButton {
    width: 30px;
    height: 30px;
    border: 1px solid #0071c2;
    color: #0071c2;
    cursor: pointer;
    background-color: white;
  }

  .optionCounterButton:disabled {
    cursor: not-allowed;
  }
`;

export {
  HeaderSearch
};
