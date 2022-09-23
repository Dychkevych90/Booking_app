import React from 'react';

import { ButtonWrapper } from './styled';

const MainButton = ( {
  text,
  onClick = () => null,
  backgroundColor,
} ) => {
  return(
    <ButtonWrapper onClick={ onClick } backgroundColor={ backgroundColor }>
      { text }
    </ButtonWrapper>
  );
};

export default MainButton;
