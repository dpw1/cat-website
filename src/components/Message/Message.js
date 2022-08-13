import React from 'react';

import BoxOption from '../BoxOption';
import './Message.scss';
import Title from './../Title/Title';

const Message = (props) => {
  return (
    <div className="Message">
      {/* Message Container */}

      <Title name="Wait, how does it work?"></Title>
      <div>
        <p>Hi there! Welcome to Memeowcats' shop. ❤️</p>

        <br />
        <p>
          My name is Rachel, I run the Memeowcats Instagram page with my
          daughter, Sammy. Recently we had the opportunity to partner up with
          some amazing Amazon merchants who sell cat related products and we
          wanted to use this chance to help forward.
        </p>

        <br />
        <p>
          For every Amazon product bought via our links, we will make a donation
          to{' '}
          <a href="https://www.torontocatrescue.ca/donate" target="_blank">
            Cat Rescue Toronto
          </a>
          .
        </p>
        <br />
        <p>
          You will be <b>helping kitties simply by shopping.</b> Yes, it's that
          easy!
        </p>

        <br />
        <p>
          Our goal is to bring joy and make helping others as simple as
          possible. Thank you for joining us in this mission! 🥰
        </p>
      </div>
    </div>
  );
};

export default Message;
