import React from 'react';

import {
  faBed,
  //faCalendarDays,
  faCar,
  //faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavigationList } from './styled.js';

const navigation = [
  { icon : faBed, text: 'Stays', to: '/', className: 'active' },
  { icon : faPlane, text: 'Flights', to: '/Flights' },
  { icon : faCar, text: 'Car rental', to: '/car_rental' },
  { icon : faBed, text: 'Attractions', to: '/Attractions' },
  { icon : faTaxi, text: 'Airport Taxis', to: '/taxi' },
];

const Navigation = () => {
  return(
    <NavigationList>
      {
        navigation.map( ( item ) => {
          const active = item.text === 'Stays' && 'active';

          return (
            <div key={ item.text } className={ active }>
              <FontAwesomeIcon icon={ item.icon } />
              { item.text }
            </div>
          );
        })
      }
    </NavigationList>
  );
};

export default Navigation;
