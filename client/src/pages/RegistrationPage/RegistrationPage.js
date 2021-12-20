import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../components/Logo';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import text from './regisrationText.json'

const insertLinks = (text) => {
  const linkRegex = /\$.*\$\(.*\)/;
  const foundArray = [linkRegex.matchAll(text)];
  console.log(foundArray);
  // const preparedText = 
  // return 
};

const RegistrationPage = (props) => {
  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpContainer}>
        <div className={styles.headerSignUpPage}>
          <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} />
          <div className={styles.linkLoginContainer}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <span>Login</span>
            </Link>
          </div>
        </div>
        <RegistrationForm history={props.history} />
      </div>
      <div className={styles.footer}>
        <div className={styles.articlesMainContainer}>
          <div className={styles.ColumnContainer}>
            <div className={styles.headerArticle}>
            {text.block1.header}
            </div>
            <div className={styles.article}>
              {text.block1.content}
            </div>
            <div className={styles.headerArticle}>
            {text.block2.header}
            </div>
            <div className={styles.article}>
            {text.block2.content}
            </div>
          </div>
          <div className={styles.ColumnContainer}>
            <div className={styles.headerArticle}>
            {text.block3.header}
            </div>
            <div className={styles.article}>
            {text.block3.content}
            </div>
            <div className={styles.headerArticle}>{text.block4.header}</div>
            <div className={styles.article}>
            {text.block4.content}
            </div>
            <div className={styles.headerArticle}>
            {text.block5.header}
            </div>
            <div className={styles.article}>
            {text.block5.content}
            </div>
            <div className={styles.headerArticle}>
            {text.block6.header}
            </div>
            <div className={styles.article}>
            {text.block6.content}
            </div>
            <div className={styles.headerArticle}>
            {text.block7.header}
            </div>
            <div className={styles.article}>
              Check out our
              <a href="" className={styles.orangeSpan}> FAQs </a>
              or send us a<a className={styles.orangeSpan}> message</a>. For
              assistance with launching a contest, you can also call us at (877)
              355-3585 or schedule a
              <a className={styles.orangeSpan}> Branding Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearError: () => dispatch(clearErrorSignUpAndLogin()),
});

export default connect(null, mapDispatchToProps)(RegistrationPage);
