import styled from 'styled-components';

const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .login__container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .lInput{
    height: 30px;
    padding: 10px;
  }

  .login__Button {
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
  }

  .lButton:disabled{
    background-color: #0071c28c;
    cursor: not-allowed;
  }
`;

export {
  LoginWrapper
};
