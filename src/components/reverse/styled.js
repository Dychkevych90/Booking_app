import styled from 'styled-components';

const ReverseWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.418);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .rContainer {
    background-color: white;
    padding: 20px;
    position: relative;
  }

  .rClose {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  .rItem {
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 20px;
  }

  .rInfo {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .rTitle {
    font-weight: 500;
  }

  .rDesc {
    font-weight: 300;
  }

  .rMax {
    font-size: 12px;
  }

  .rPrice {
    font-weight: 500;
  }

  .rSelectRooms{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    font-size: 8px;
    color: gray;
  }

  .room{
    display: flex;
    flex-direction: column;
  }

  .rButton {
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    width: 100%;
    margin-top: 20px;
  }
`;

export {
  ReverseWrapper
};
