import styled from 'styled-components';

const HomePageWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
  
  .caption {
    position: relative;
    background-color: #003580;
    padding: 10px 0;
    min-height: 350px;
    
    h1 {
      color: #fff;
      font-size: 40px;
      margin-bottom: 15px;
    }
    
    p {
      color: #fff;
      font-size: 15px;
      margin-bottom: 15px;
    }
  }
  
  .header_top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export {
  HomePageWrapper,
};
