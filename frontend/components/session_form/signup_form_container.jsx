import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions'

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
    loginUser: (user) => dispatch(login(user)),
    otherForm: (
      <button className="login-submit" onClick={() => dispatch(openModal('login'))}>
        Sign In
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(SessionForm);
