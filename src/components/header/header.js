import React from 'react';

import MainButton from '../layout/buttons/mainButton';

import {
  Header,
} from './styled';

const HeaderWrapper = () => {
  return(
    <Header>
      <div className="header_top">
        <div className="logo"><span>DEV</span>eloper</div>

        <div className="buttons">
          <MainButton
            text={ 'Login' }
            backgroundColor={ '#febb02' }
          />

          <MainButton
            text={ 'Registration' }
            backgroundColor={ '#febb02' }
          />
        </div>
      </div>
    </Header>
  );
};

export default HeaderWrapper;
