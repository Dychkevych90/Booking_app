import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import MainButton from '../layout/buttons/mainButton';

import { AuthContext } from "../../context/authContext";

import {
  Header,
} from './styled';

const HeaderWrapper = () => {
  const { user } = useContext(AuthContext);

  return(
    <Header>
      <div className="header_top">
        <Link to={ '/' } className="logo"><span>DEV</span>eloper</Link>

        { user ? `Hello, ${user.username}` : (
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
        )
        }
      </div>
    </Header>
  );
};

export default HeaderWrapper;
