import styled from 'styled-components';

const NavigationList = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  
  div {
    text-decoration: none;
    color: white;
    font-weight: 500;
    border: none;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 20px;
    transition: .5s;
    border-radius: 20px;
    
    &.active {
      border: 1px solid white;
      padding: 10px;
      border-radius: 20px;
      background-color: #0071c2;
    }
    
    &:hover {
      background-color: #0071c2;
      transition: .5s;
    }
  }
  
  a:last-child {
    margin-right: 0;
  }
`;

export {
  NavigationList,
};
