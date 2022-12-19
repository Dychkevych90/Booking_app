import styled from 'styled-components';

const FeaturedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 50px;
  z-index: 1;
`;

const FeaturedItem = styled.div`
  position: relative;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
  flex:1;

  .featuredImg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .featuredTitles{
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
`;

export {
  FeaturedWrapper,
  FeaturedItem
};
