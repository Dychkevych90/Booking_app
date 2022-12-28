import React from 'react';

import {
  MailWrapper
} from './styled.js';

const MailList = () => {
  return (
    <MailWrapper>
      <h1 className="mailTitle">Save time, save money!</h1>
      { /* eslint-disable-next-line react/no-unescaped-entities */ }
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </MailWrapper>
  );
};

export default MailList;
