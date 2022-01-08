import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../constants';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorksPage.module.sass';

const HowItWorksPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.firstBlock}>
          <div>
            <h1>How Does Squadhelp Work?</h1>
            <p>
              Squadhelp helps you come up with a great name for your business by
              combining the power of crowdsourcing with sophisticated technology
              and Agency-level validation services.
            </p>
          </div>
          <img
            className={styles.appUser}
            src={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/app-user.svg`}
            alt="app user"
          />
        </div>
        <div className={styles.secondBlock}>
          <div className={styles.deckHeader}>
            <h2>3 Ways To Use Squadhelp</h2>
            <p>
              Squadhelp offers 3 ways to get you a perfect name for your
              business.
            </p>
          </div>
          <div className={styles.cardDeck}>
            <div className={styles.card}>
              <img
                className={styles.cardImg}
                src={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/group.svg`}
                alt="Launch a Contest"
              />
              <h3>Launch a Contest</h3>
              <p>
                Work with hundreds of creative experts to get custom name
                suggestions for your business or brand. All names are
                auto-checked for URL availability.
              </p>
              <a className={styles.cardLink} href="http://www.google.com">
                Launch a Contest
              </a>
            </div>
            <div className={styles.card}>
              <img
                className={styles.cardImg}
                src={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/screen.svg`}
                alt="Explore Names For Sale"
              />
              <h3>Explore Names For Sale</h3>
              <p>
                Our branding team has curated thousands of pre-made names that
                you can purchase instantly. All names include a matching URL and
                a complimentary Logo Design
              </p>
              <a className={styles.cardLink} href="http://www.google.com">
                Explore Names For Sale
              </a>
            </div>
            <div className={styles.card}>
              <img
                className={styles.cardImg}
                src={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/idea.svg`}
                alt="Agency-level Managed Contests"
              />
              <h3>Agency-level Managed Contests</h3>
              <p>
                Our Managed contests combine the power of crowdsourcing with the
                rich experience of our branding consultants. Get a complete
                agency-level experience at a fraction of Agency costs
              </p>
              <a className={styles.cardLink} href="http://www.google.com">
                Launch a Contest
              </a>
            </div>
          </div>
        </div>
        <div className={styles.thirdBlock}>
          <h2 className={styles.instructionsHeader}>
            How Do Naming Contests Work?
          </h2>
          <div className={styles.contestsInstruction}>
            <img
              className={styles.houseAgency}
              src={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/house-agency.svg`}
              alt="house-agency"
            />
            <ul>
              <li>
                <span>1</span>
                <p>
                  Fill out your Naming Brief and begin receiving name ideas in
                  minutes
                </p>
              </li>
              <li>
                <span>2</span>
                <p>
                  Rate the submissions and provide feedback to creatives.
                  Creatives submit even more names based on your feedback.
                </p>
              </li>
              <li>
                <span>3</span>
                <p>
                  Our team helps you test your favorite names with your target
                  audience. We also assist with Trademark screening.
                </p>
              </li>
              <li>
                <span>4</span>
                <p>Pick a Winner. The winner gets paid for their submission.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default connect(null)(HowItWorksPage);
