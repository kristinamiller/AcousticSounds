import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
    navLink: <Link to="/login">log in instead</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Sign In
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SessionForm);
