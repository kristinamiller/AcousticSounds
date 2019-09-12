import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In',
    navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Create account
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SessionForm);