import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  font-size: 12px;
  padding-top: 50px;

  .fLists{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .fList{
    list-style: none;
    padding: 0;
  }

  .fListItem{
    margin-bottom: 10px;
    color: #003580;
    cursor: pointer;
  }
`;

export {
  FooterWrapper
};