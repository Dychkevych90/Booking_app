import styled from 'styled-components';

const ButtonWrapper = styled.button`
	background-color: ${ props => props.backgroundColor ? props.backgroundColor : '#fff' };
  padding: 10px 15px;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
`;

export {
  ButtonWrapper,
};
