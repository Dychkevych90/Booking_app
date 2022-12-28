import styled from 'styled-components';

const ListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
  padding-top: 50px;

  .listSearch {
    flex: 1;
    background-color: #febb02;
    padding: 10px;
    border-radius: 10px;
    position: sticky;
    top: 10px;
    height: max-content;
  }

  .lsTitle{
    font-size: 20px;
    color: #555;
    margin-bottom: 10px;
  }

  .lsItem{
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
    
    &>label{
      font-size: 12px;
    }
    
    &>input{
      height: 30px;
      border: none;
      padding: 5px;
    }
    
    &>span{
      height: 30px;
      padding: 5px;
      background-color: white;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  
  .lsOptions{
    padding: 10px;
  }

  .lsOptionItem{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #555;
    font-size: 12px;
  }

  .lsOptionInput{
    width: 50px;
  }

  .listSearch>button{
    padding: 10px;
    background-color: #0071c2;
    color: white;
    border: none;
    width: 100%;
    font-weight: 500;
    cursor: pointer;
  }

  .listResult {
    flex: 3;
  }
`;

const Caption = styled.div`
  position: relative;
  background-color: #003580;
  padding: 10px 0;
`;

export {
  ListWrapper,
  Caption
};
