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
                <picture className="Footer-amazon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="140px"
                    height="26px"
                    viewBox="0 0 140 26"
                    version="1.1"
                  >
                    <g
                      id="Artboard"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Group-+-associates"
                        transform="translate(1.000000, 1.000000)"
                      >
                        <g
                          id="Group"
                          transform="translate(0.000000, 3.879945)"
                          fill="#000000"
                        >
                          <path
                            d="M38.8073866,13.4284429 C38.3598733,12.8247092 35.8498027,13.1415689 34.724305,13.2855229 C34.381055,13.3248144 34.3283229,13.0115162 34.6367457,12.785073 C36.6378367,11.3038287 39.9179271,11.7316697 40.3002623,12.2286729 C40.6827066,12.727859 40.1989467,16.1891892 38.3212249,17.8400074 C38.0349648,18.0950576 37.7588581,17.9582266 37.8893237,17.6233296 C38.309543,16.5135165 39.2554458,14.0309129 38.8073866,13.4284429"
                            id="Fill-1"
                          />
                          <path
                            d="M37.1686252,15.319137 C33.6666037,18.0629184 28.5823038,19.5241279 24.2074719,19.5241279 C18.0752494,19.5241279 12.5556993,17.1192911 8.37577844,13.1117358 C8.04799328,12.7974269 8.33948009,12.3669451 8.73513218,12.6131849 C13.2426182,15.3959629 18.8195857,17.073756 24.5765052,17.073756 C28.4613093,17.073756 32.7306561,16.2174627 36.6603382,14.4490665 C37.2535414,14.1843791 37.7492889,14.8639028 37.1686252,15.319137"
                            id="Fill-2"
                          />
                          <path
                            d="M34.0767988,1.98242884 L34.0767988,0.501041278 C34.0767988,0.27474964 34.2507578,0.124405196 34.4616953,0.124405196 L41.3167341,0.124405196 C41.5355341,0.124405196 41.7117044,0.27868411 41.7117044,0.49639145 L41.7117044,1.77259044 C41.7080189,1.9849326 41.5247231,2.26368383 41.1954788,2.70637132 L37.6456599,7.6244588 C38.9630057,7.59679829 40.3567658,7.78493749 41.5562962,8.44127862 C41.8232544,8.5886424 41.8967201,8.80408444 41.9188335,9.02000339 L41.9188335,10.6013026 C41.9188335,10.8206792 41.6706717,11.0747505 41.4134189,10.9434823 C39.3040439,9.86996813 36.5065728,9.75324552 34.169798,10.956478 C33.9313416,11.0772543 33.6847769,10.8302173 33.6847769,10.6098869 L33.6847769,9.10536946 C33.6847769,8.86369762 33.6877254,8.45260512 33.9377299,8.08371876 L38.0530383,2.35691885 L34.471032,2.35691885 C34.2507578,2.35691885 34.0767988,2.20943584 34.0767988,1.98242884"
                            id="Fill-3"
                          />
                          <path
                            d="M12.0858173,11.7642388 L10.0874922,11.7642388 C9.89842159,11.7496501 9.74412397,11.6015562 9.73115778,11.4117803 L9.73115778,0.732472673 C9.73115778,0.520139433 9.90407956,0.348630078 10.1173144,0.348630078 L11.9805554,0.346545976 C12.1754018,0.357824647 12.3324106,0.511190053 12.3420763,0.707340852 L12.3420763,2.10209563 L12.3832144,2.10209563 C12.8679141,0.752823319 13.7820302,0.124405196 15.0142895,0.124405196 C16.2663516,0.124405196 17.0502165,0.752823319 17.6109451,2.10209563 C18.0956448,0.752823319 19.1989494,0.124405196 20.373568,0.124405196 C21.2153093,0.124405196 22.1295433,0.48397413 22.6893289,1.29101207 C23.3242006,2.18987311 23.1940672,3.49145626 23.1940672,4.64065475 L23.1925348,11.3800284 C23.1925348,11.5937102 23.0186701,11.7642388 22.8062604,11.7642388 L20.8066386,11.7642388 C20.6068415,11.7496501 20.4500685,11.5846382 20.4500685,11.3800284 L20.4498328,5.71948414 C20.4498328,5.26686617 20.4855487,4.14610955 20.3925458,3.71776524 C20.2423738,2.99764662 19.7942152,2.79892134 19.2165127,2.79892134 C18.7300449,2.79892134 18.2280177,3.13544256 18.0213839,3.67473466 C17.8145143,4.2131686 17.833492,5.11325558 17.833492,5.71948414 L17.833492,11.3800284 C17.833492,11.5937102 17.6611596,11.7642388 17.4472176,11.7642388 L15.4508963,11.7642388 C15.2503919,11.7496501 15.0914972,11.5846382 15.0914972,11.3800284 L15.0877252,5.71948414 C15.0877252,4.52750026 15.2754992,2.77562843 13.8565269,2.77562843 C12.419284,2.77562843 12.4750386,4.4838567 12.4750386,5.71948414 L12.4750386,11.3800284 C12.4750386,11.5937102 12.3007023,11.7642388 12.0858173,11.7642388"
                            id="Fill-4"
                          />
                          <path
                            d="M46.7499746,0.124405196 C49.4451068,0.124405196 50.9014407,2.55228947 50.9014407,5.63715972 C50.9014407,8.62345962 49.2912062,10.9882499 46.7499746,10.9882499 C44.1071408,10.9882499 42.6673841,8.56227415 42.6673841,5.53499683 C42.6673841,2.48796053 44.1242528,0.124405196 46.7499746,0.124405196 L46.7499746,0.124405196 Z M46.8414431,2.06437746 C45.4510719,2.06437746 45.3621806,4.01545345 45.3621806,5.23101474 C45.3621806,6.44520316 45.3444024,9.04827762 46.8241093,9.04827762 C48.2857046,9.04827762 48.3563732,6.95144869 48.3563732,5.67182017 C48.3563732,4.82979371 48.3192611,3.82531106 48.0739211,3.02996215 C47.8628042,2.33597676 47.4399038,2.06437746 46.8414431,2.06437746 L46.8414431,2.06437746 Z"
                            id="Fill-5"
                          />
                          <path
                            d="M54.010884,10.9882499 L52.0127511,10.9882499 C51.8110472,10.9746338 51.6524727,10.8206227 51.6524727,10.6296535 L51.6499913,0.658638243 C51.6660614,0.477051641 51.832671,0.333681753 52.0349657,0.333681753 L53.8944937,0.331736591 C54.068193,0.34226335 54.2137696,0.456799071 54.2514635,0.611954353 L54.2514635,2.13501627 L54.2898664,2.13501627 C54.8506671,0.774890283 55.6352681,0.124405196 57.0239173,0.124405196 C57.9197095,0.124405196 58.7999042,0.43906377 59.3618865,1.29916868 C59.8840479,2.09554092 59.8840479,3.43804603 59.8840479,4.400558 L59.8840479,10.6731336 C59.8618333,10.849228 59.7016045,10.9882499 59.5015549,10.9882499 L57.4901877,10.9882499 C57.3059719,10.9780664 57.1561415,10.8460242 57.134754,10.6731336 L57.134754,5.26157828 C57.134754,4.17205866 57.2647331,2.57816996 55.880574,2.57816996 C55.3944523,2.57816996 54.9447247,2.89225643 54.71927,3.37362684 C54.4386334,3.98303468 54.4004668,4.59175599 54.4004668,5.26157828 L54.4004668,10.6296535 C54.3979854,10.8290899 54.2244042,10.9882499 54.010884,10.9882499"
                            id="Fill-6"
                          />
                          <path
                            d="M5.53913664,6.76022864 C5.53913664,7.52937843 5.55751389,8.1680516 5.16258084,8.85296671 C4.84329092,9.40589478 4.33441891,9.74666764 3.7686367,9.74666764 C2.99560653,9.74666764 2.54506747,9.17189664 2.54506747,8.31886073 C2.54506747,6.63800121 4.07962721,6.33231645 5.53913664,6.33231645 L5.53913664,6.76022864 L5.53913664,6.76022864 Z M7.43125622,11.5963387 C7.30803301,11.7176732 7.12779277,11.7233139 6.9874091,11.6400239 C6.36321103,11.0793168 6.25139123,10.8209259 5.90884621,10.2839816 C4.87755764,11.4239981 4.1496218,11.7642388 2.8142055,11.7642388 C1.23012854,11.7642388 0,10.7073923 0,8.59093887 C0,6.93522063 0.827245113,5.81056598 2.00389943,5.26006007 C3.02334175,4.77664219 4.44788175,4.68639139 5.53762661,4.55593577 L5.53762661,4.28986391 C5.53762661,3.80620601 5.57338681,3.23097714 5.30944779,2.81404722 C5.0807154,2.43588194 4.63974681,2.28586398 4.2544667,2.28586398 C3.53870925,2.28586398 2.89945426,2.68335157 2.74323868,3.50557001 C2.71057844,3.69051216 2.58813022,3.872934 2.4176327,3.88205509 L0.596077046,3.66698934 C0.440968587,3.63134507 0.272906746,3.49776908 0.316859678,3.2423785 C0.733360764,0.847491769 2.72939959,0.124405196 4.51752002,0.124405196 C5.43112102,0.124405196 6.62836789,0.387596707 7.34766815,1.13816657 C8.26226556,2.06503754 8.17325257,3.2974651 8.17325257,4.6430662 L8.17325257,7.81516599 C8.17325257,8.77132046 8.53805084,9.1900506 8.88347438,9.70503225 C9.00304407,9.89033444 9.02961512,10.1098407 8.87816018,10.246177 C8.49288006,10.5934986 7.81111141,11.2362956 7.43435617,11.5975388 L7.43125622,11.5963387 L7.43125622,11.5963387 Z"
                            id="Fill-7"
                          />
                          <path
                            d="M29.4927705,6.76022864 C29.4927705,7.52937843 29.5104484,8.1680516 29.1139423,8.85296671 C28.7953848,9.40589478 28.286998,9.74666764 27.7216624,9.74666764 C26.9497687,9.74666764 26.4986866,9.17189664 26.4986866,8.31886073 C26.4986866,6.63800121 28.0365419,6.33231645 29.4927705,6.33231645 L29.4927705,6.76022864 L29.4927705,6.76022864 Z M30.9416336,11.6400239 C30.3175337,11.0793168 30.2062455,10.8209259 29.8631898,10.2839816 C28.8313653,11.4239981 28.1023998,11.7642388 26.7647264,11.7642388 C25.1839907,11.7642388 23.9536191,10.7073923 23.9536191,8.59093887 C23.9536191,6.93522063 24.780917,5.81056598 25.9562535,5.26006007 C26.9757865,4.77664219 28.3989469,4.68639139 29.4913432,4.55593577 L29.4913432,4.28986391 C29.4913432,3.80620601 29.5254495,3.23097714 29.2627871,2.81404722 C29.0357813,2.43588194 28.5942826,2.28586398 28.2060473,2.28586398 C27.489484,2.28586398 26.8535355,2.68335157 26.6978427,3.50557001 C26.6644009,3.69051216 26.541707,3.872934 26.3705114,3.88205509 L24.5481529,3.66698934 C24.3945641,3.63134507 24.225251,3.49776908 24.2681053,3.2423785 C24.6869033,0.847491769 26.6827828,0.124405196 28.4720317,0.124405196 C29.3866991,0.124405196 30.580639,0.387596707 31.3015209,1.13816657 C32.216299,2.06503754 32.1284865,3.2974651 32.1284865,4.6430662 L32.1284865,7.81516599 C32.1284865,8.77132046 32.4937998,9.1900506 32.8366339,9.70503225 C32.9564487,9.89033444 32.9836894,10.1098407 32.8314294,10.246177 C32.4486201,10.5934986 31.7647235,11.2362956 31.3896656,11.5975388 C31.2607706,11.7176732 31.0806055,11.7233139 30.9416336,11.6400239 Z"
                            id="Fill-8"
                          />
                        </g>
                        <path
                          d="M67.8555127,14.8681944 L67.5615569,13.7145705 C66.6236932,14.6287676 65.6298525,15.0858593 64.5800051,15.0858593 C63.6561393,15.0858593 62.9002605,14.7992701 62.312346,14.226083 C61.7244314,13.652896 61.4304785,12.8801934 61.4304785,11.907952 C61.4304785,10.5874451 61.9903888,9.65875092 63.110226,9.12184153 C63.6561467,8.83162023 64.4820143,8.66474549 65.5878536,8.6212123 L67.4775695,8.55591283 L67.4775695,7.90291819 C67.4775695,7.14834282 67.2816009,6.58241979 66.8896579,6.2051321 C66.4977149,5.82784442 65.9797979,5.63920341 65.3358915,5.63920341 C64.4120257,5.63920341 63.5021716,5.92216493 62.6063018,6.48809645 L62.0183902,5.35623906 C63.0682376,4.65970796 64.2300513,4.31144763 65.5038662,4.31144763 C66.5817096,4.31144763 67.4390721,4.60166457 68.0759796,5.18210716 C68.712887,5.76254975 69.031336,6.64045599 69.031336,7.81585223 L69.031336,11.3637898 C69.031336,13.1776729 69.0943259,14.3457961 69.2203076,14.8681944 L67.8555127,14.8681944 Z M67.4775695,9.77483618 L65.7348315,9.84013564 C64.9369474,9.85464671 64.3140473,9.98524433 63.8661124,10.2319324 C63.2921958,10.5656869 63.0052418,11.0953328 63.0052418,11.8208861 C63.0052418,12.3868176 63.1732149,12.847537 63.5091661,13.2030581 C63.8451172,13.5585792 64.2930454,13.736337 64.8529641,13.736337 C65.7768298,13.736337 66.6516895,13.2865008 67.4775695,12.3868148 L67.4775695,9.77483618 Z M70.1146972,14.2151998 L70.6186215,12.9745099 C71.4025076,13.4823972 72.2283752,13.736337 73.096249,13.736337 C73.7121595,13.736337 74.2195782,13.598484 74.6185202,13.3227738 C75.0174622,13.0470635 75.2169303,12.6335044 75.2169303,12.0820839 C75.2169303,11.6757741 75.0559561,11.3311415 74.7340029,11.0481757 C74.4120496,10.76521 74.0236119,10.5294087 73.568678,10.3407649 C73.1137441,10.152121 72.6623165,9.94534146 72.2143816,9.72041996 C71.7664467,9.49549845 71.3815084,9.16537668 71.0595552,8.73004474 C70.737602,8.2947128 70.5766278,7.76506688 70.5766278,7.1410911 C70.5766278,6.32847147 70.8705807,5.65371709 71.4584952,5.11680769 C72.0464098,4.5798983 72.8722774,4.31144763 73.9361228,4.31144763 C74.7760007,4.31144763 75.5948695,4.47106694 76.3927535,4.79031037 L76.3927535,6.2051321 C75.5668735,5.82784442 74.7690014,5.63920341 73.9991133,5.63920341 C72.7252984,5.63920341 72.0884005,6.11806136 72.0884005,7.07579163 C72.0884005,7.49661251 72.2493747,7.84850055 72.5713279,8.13146631 C72.8932812,8.41443208 73.2817189,8.64660563 73.7366528,8.82799394 C74.1915867,9.00938225 74.6500132,9.2125341 75.111946,9.43745561 C75.5738789,9.66237711 75.9658161,9.99612659 76.2877693,10.4387141 C76.6097225,10.8813015 76.7706967,11.4218306 76.7706967,12.0603174 C76.7706967,13.0470698 76.4277517,13.7980062 75.7418513,14.313149 C75.055951,14.8282918 74.1740924,15.0858593 73.096249,15.0858593 C71.9904097,15.0858593 70.9965691,14.7956424 70.1146972,14.2151998 L70.1146972,14.2151998 Z M77.3291369,14.2151998 L77.8330611,12.9745099 C78.6169472,13.4823972 79.4428148,13.736337 80.3106887,13.736337 C80.9265992,13.736337 81.4340178,13.598484 81.8329598,13.3227738 C82.2319019,13.0470635 82.4313699,12.6335044 82.4313699,12.0820839 C82.4313699,11.6757741 82.2703957,11.3311415 81.9484425,11.0481757 C81.6264893,10.76521 81.2380516,10.5294087 80.7831177,10.3407649 C80.3281838,10.152121 79.8767561,9.94534146 79.4288212,9.72041996 C78.9808863,9.49549845 78.5959481,9.16537668 78.2739948,8.73004474 C77.9520416,8.2947128 77.7910674,7.76506688 77.7910674,7.1410911 C77.7910674,6.32847147 78.0850203,5.65371709 78.6729349,5.11680769 C79.2608494,4.5798983 80.086717,4.31144763 81.1505624,4.31144763 C81.9904404,4.31144763 82.8093091,4.47106694 83.6071931,4.79031037 L83.6071931,6.2051321 C82.7813132,5.82784442 81.9834411,5.63920341 81.213553,5.63920341 C79.9397381,5.63920341 79.3028402,6.11806136 79.3028402,7.07579163 C79.3028402,7.49661251 79.4638144,7.84850055 79.7857676,8.13146631 C80.1077208,8.41443208 80.4961585,8.64660563 80.9510924,8.82799394 C81.4060263,9.00938225 81.8644528,9.2125341 82.3263857,9.43745561 C82.7883185,9.66237711 83.1802557,9.99612659 83.5022089,10.4387141 C83.8241621,10.8813015 83.9851363,11.4218306 83.9851363,12.0603174 C83.9851363,13.0470698 83.6421913,13.7980062 82.956291,14.313149 C82.2703907,14.8282918 81.388532,15.0858593 80.3106887,15.0858593 C79.2048494,15.0858593 78.2110087,14.7956424 77.3291369,14.2151998 L77.3291369,14.2151998 Z M89.4148443,15.0858593 C88.0570416,15.0858593 86.9547183,14.5743519 86.1078414,13.5513219 C85.2609644,12.5282918 84.8375323,11.2477096 84.8375323,9.70953671 C84.8375323,8.15685279 85.257465,6.86901511 86.0973429,5.84598505 C86.9372209,4.82295499 88.0500425,4.31144763 89.4358411,4.31144763 C90.7936438,4.31144763 91.8959671,4.8265827 92.742844,5.85686829 C93.5897209,6.88715389 94.013153,8.17136385 94.013153,9.70953671 C94.013153,11.2477096 93.5897209,12.5282918 92.742844,13.5513219 C91.8959671,14.5743519 90.7866449,15.0858593 89.4148443,15.0858593 L89.4148443,15.0858593 Z M89.4148443,13.7145705 C90.324712,13.7145705 91.0490959,13.3445439 91.5880176,12.6044796 C92.1269393,11.8644153 92.3963961,10.899444 92.3963961,9.70953671 C92.3963961,8.5196294 92.1269393,7.55103036 91.5880176,6.80371053 C91.0490959,6.0563907 90.3317109,5.68273639 89.4358411,5.68273639 C88.5259733,5.68273639 87.79809,6.05276299 87.2521694,6.79282729 C86.7062487,7.53289159 86.4332924,8.50511834 86.4332924,9.70953671 C86.4332924,10.899444 86.7027492,11.8644153 87.2416709,12.6044796 C87.7805926,13.3445439 88.5049765,13.7145705 89.4148443,13.7145705 L89.4148443,13.7145705 Z M99.6318325,15.0858593 C98.1620461,15.0858593 97.0107307,14.5852351 96.1778518,13.5839716 C95.3449728,12.5827082 94.9285396,11.3275199 94.9285396,9.81836915 C94.9285396,8.26568523 95.3799672,6.95970899 96.282836,5.90040127 C97.1857048,4.84109354 98.3790134,4.31144763 99.8627978,4.31144763 C100.772666,4.31144763 101.598533,4.52185491 102.340425,4.94267579 L102.340425,6.35749752 C101.612531,5.89314345 100.814659,5.6609699 99.9467852,5.6609699 C98.9109357,5.6609699 98.0815687,6.03825192 97.4586592,6.79282729 C96.8357497,7.54740265 96.5242997,8.5196294 96.5242997,9.70953671 C96.5242997,10.9719993 96.8182525,11.9551092 97.4061671,12.6588959 C97.9940817,13.3626825 98.7989526,13.7145705 99.8208041,13.7145705 C100.60469,13.7145705 101.402562,13.482397 102.214444,13.0180429 L102.697372,14.1499003 C101.801502,14.7738761 100.779666,15.0858593 99.6318325,15.0858593 L99.6318325,15.0858593 Z M103.86472,14.8681944 L103.86472,4.57264549 L105.39749,4.57264549 L105.39749,14.8681944 L103.86472,14.8681944 Z M104.620607,2.24363124 C104.312652,2.24363124 104.064191,2.14205531 103.875219,1.93890041 C103.686246,1.7357455 103.591761,1.48180568 103.591761,1.17707332 C103.591761,0.872340961 103.689746,0.614773426 103.885717,0.404362988 C104.081689,0.193952549 104.326649,0.088748908 104.620607,0.088748908 C104.928562,0.088748908 105.180522,0.190324837 105.376493,0.393479743 C105.572465,0.596634649 105.670449,0.857829896 105.670449,1.17707332 C105.670449,1.48180568 105.572465,1.7357455 105.376493,1.93890041 C105.180522,2.14205531 104.928562,2.24363124 104.620607,2.24363124 L104.620607,2.24363124 Z M113.4728,14.8681944 L113.178844,13.7145705 C112.240981,14.6287676 111.24714,15.0858593 110.197293,15.0858593 C109.273427,15.0858593 108.517548,14.7992701 107.929633,14.226083 C107.341719,13.652896 107.047766,12.8801934 107.047766,11.907952 C107.047766,10.5874451 107.607676,9.65875092 108.727514,9.12184153 C109.273434,8.83162023 110.099302,8.66474549 111.205141,8.6212123 L113.094857,8.55591283 L113.094857,7.90291819 C113.094857,7.14834282 112.898888,6.58241979 112.506945,6.2051321 C112.115002,5.82784442 111.597085,5.63920341 110.953179,5.63920341 C110.029313,5.63920341 109.119459,5.92216493 108.223589,6.48809645 L107.635678,5.35623906 C108.685525,4.65970796 109.847339,4.31144763 111.121154,4.31144763 C112.198997,4.31144763 113.05636,4.60166457 113.693267,5.18210716 C114.330174,5.76254975 114.648623,6.64045599 114.648623,7.81585223 L114.648623,11.3637898 C114.648623,13.1776729 114.711613,14.3457961 114.837595,14.8681944 L113.4728,14.8681944 Z M113.094857,9.77483618 L111.352119,9.84013564 C110.554235,9.85464671 109.931335,9.98524433 109.4834,10.2319324 C108.909483,10.5656869 108.622529,11.0953328 108.622529,11.8208861 C108.622529,12.3868176 108.790502,12.847537 109.126454,13.2030581 C109.462405,13.5585792 109.910333,13.736337 110.470252,13.736337 C111.394117,13.736337 112.268977,13.2865008 113.094857,12.3868148 L113.094857,9.77483618 Z M119.55341,15.0858593 C118.839514,15.0858593 118.290102,14.8790797 117.905158,14.4655144 C117.520214,14.051949 117.327745,13.460632 117.327745,12.6915456 L117.327745,5.87863478 L115.647997,5.87863478 L115.647997,4.57264549 L117.327745,4.57264549 L117.327745,2.24363124 L118.860514,1.72123553 L118.860514,4.57264549 L121.821069,4.57264549 L121.359139,5.87863478 L118.860514,5.87863478 L118.860514,12.4303477 C118.860514,13.2865006 119.203459,13.7145705 119.88936,13.7145705 C120.43528,13.7145705 120.974194,13.5259295 121.506117,13.1486419 L122.052035,14.2804992 C121.338138,14.8174086 120.505272,15.0858593 119.55341,15.0858593 L119.55341,15.0858593 Z M130.610272,9.99250106 L124.164241,9.99250106 C124.178239,11.0808309 124.475692,11.9768757 125.056607,12.6806624 C125.637523,13.384449 126.438894,13.736337 127.460746,13.736337 C128.272628,13.736337 129.091496,13.5041635 129.917376,13.0398094 L130.400304,14.1716668 C129.504434,14.7811315 128.454602,15.0858593 127.250777,15.0858593 C125.738997,15.0858593 124.580683,14.5670965 123.7758,13.5295554 C122.970917,12.4920143 122.568481,11.1824103 122.568481,9.60070427 C122.568481,8.03350928 122.946421,6.76018245 123.702311,5.78068558 C124.458201,4.80118871 125.438044,4.31144763 126.641869,4.31144763 C127.887688,4.31144763 128.860532,4.78305016 129.56043,5.72626936 C130.260328,6.66948857 130.610272,7.96095396 130.610272,9.60070427 L130.610272,9.99250106 Z M124.164241,8.75181123 L128.993515,8.75181123 C128.965519,7.89565841 128.752054,7.15923292 128.353112,6.54251267 C127.95417,5.92579242 127.39076,5.61743692 126.662866,5.61743692 C125.920974,5.61743692 125.326069,5.918537 124.878134,6.52074618 C124.430199,7.12295537 124.192237,7.86663628 124.164241,8.75181123 L124.164241,8.75181123 Z M131.2527,14.2151998 L131.756624,12.9745099 C132.54051,13.4823972 133.366378,13.736337 134.234252,13.736337 C134.850162,13.736337 135.357581,13.598484 135.756523,13.3227738 C136.155465,13.0470635 136.354933,12.6335044 136.354933,12.0820839 C136.354933,11.6757741 136.193959,11.3311415 135.872005,11.0481757 C135.550052,10.76521 135.161615,10.5294087 134.706681,10.3407649 C134.251747,10.152121 133.800319,9.94534146 133.352384,9.72041996 C132.904449,9.49549845 132.519511,9.16537668 132.197558,8.73004474 C131.875605,8.2947128 131.71463,7.76506688 131.71463,7.1410911 C131.71463,6.32847147 132.008583,5.65371709 132.596498,5.11680769 C133.184412,4.5798983 134.01028,4.31144763 135.074125,4.31144763 C135.914003,4.31144763 136.732872,4.47106694 137.530756,4.79031037 L137.530756,6.2051321 C136.704876,5.82784442 135.907004,5.63920341 135.137116,5.63920341 C133.863301,5.63920341 133.226403,6.11806136 133.226403,7.07579163 C133.226403,7.49661251 133.387377,7.84850055 133.709331,8.13146631 C134.031284,8.41443208 134.419722,8.64660563 134.874655,8.82799394 C135.329589,9.00938225 135.788016,9.2125341 136.249949,9.43745561 C136.711882,9.66237711 137.103819,9.99612659 137.425772,10.4387141 C137.747725,10.8813015 137.908699,11.4218306 137.908699,12.0603174 C137.908699,13.0470698 137.565754,13.7980062 136.879854,14.313149 C136.193954,14.8282918 135.312095,15.0858593 134.234252,15.0858593 C133.128412,15.0858593 132.134572,14.7956424 131.2527,14.2151998 L131.2527,14.2151998 Z"
                          id="associates"
                          fill="#FFA724"
                        />
                      </g>
                    </g>
                  </svg>
                </picture>
              </div>
              <span className="Footer-bottom">
                <span>{new Date().getFullYear()} (©) Built with ❤️ by </span>{' '}
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