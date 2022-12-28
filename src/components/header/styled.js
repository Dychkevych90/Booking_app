import styled from 'styled-components';

const Header = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
  margin-bottom: 40px;
  
  .header_top {
    display: flex;
    justify-content: space-between;
  }
  
  .logo {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    span {
      background-color: #333;
      padding: 5px;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
    }
  }
  
  .buttons button:first-child{
    margin-right: 10px;
  }
`;

export {
  Header,
};
