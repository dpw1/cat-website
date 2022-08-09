import { Link } from 'gatsby';
import React, { useState } from 'react';

import Accordion from '../Accordion';
import Container from '../Container';
import Dropdown from '../Dropdown/Dropdown';
import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import Button from '../Button';
import Config from '../../config.json';
import * as styles from './Footer.module.css';

import './Footer.scss';

const Footer = (prop) => {
  const [email, setEmail] = useState('');

  const subscribeHandler = (e) => {
    e.preventDefault();
    setEmail('');
    console.log('Subscribe this email: ', email);
  };

  const handleSocialClick = (platform) => {
    window.open(Config.social[platform]);
  };

  const renderLinks = (linkCollection) => {
    return (
      <ul className={styles.linkList}>
        {linkCollection.links.map((link, index) => {
          return (
            <li key={index}>
              <Link className={`${styles.link} fancy`} to={link.link}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.contentBottomContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={`Footer-contentBottom ${styles.contentBottom}`}>
            <div className={styles.copyrightContainer}>
              <div className={styles.creditCardContainer}>
                {Config.paymentOptions.amex && (
                  <img
                    className={styles.amexSize}
                    src={'/amex.png'}
                    alt={'amex'}
                  ></img>
                )}
                {Config.paymentOptions.mastercard && (
                  <img
                    className={styles.masterSize}
                    src={'/master.png'}
                    alt={'mastercard'}
                  ></img>
                )}
                {Config.paymentOptions.visa && (
                  <img
                    className={styles.visaSize}
                    src={'/visa.png'}
                    alt={'visa'}
                  ></img>
                )}
                <img src="{`/amazon-badge-1.png`}" alt="" />
              </div>
              <span className="Footer-bottom">
                <span>{new Date().getFullYear()} (©) Built by </span>{' '}
                <span style={{ textDecoration: 'underline', marginLeft: 5 }}>
                  Memeowcats.
                </span>{' '}
              </span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
