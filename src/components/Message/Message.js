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
        <p>
          Hi there! First of all, thank you so much for visiting our website. ❤️
        </p>
        <br />
        <br />
        <p>
          My name is Rachel, I run the Memeowcats Instagram page with my
          daughter, Sammy. Recently we had the opportunity to partner up with
          some amazing Amazon merchants who sell cat related products and we
          wanted to use this chance to help forwrard.
        </p>
        <br />
        <br />
        <p>
          For every product bought via our links, we will be making a donation
          to{' '}
          <a
            href="https://www.torontocatrescue.ca/donate?source=instagram_memeowcats"
            target="_blank"
          >
            Cat Rescue Toronto
          </a>
          . You will be <b>helping kitties simply by shopping.</b>
        </p>
        <br />
        <br />
        <p>
          We are confident that with your help we can make this world a better
          place, for all of us. 🥰
        </p>
      </div>
    </div>
  );
};

export default Message;
