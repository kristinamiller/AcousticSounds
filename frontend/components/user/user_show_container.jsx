import { connect } from 'react-redux';
import React from 'react';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';

const msp = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId]
})

const mdp = (dispatch, ownProps) => ({
  fetchUser: (id) => dispatch(fetchUser(id)) 
})

export default connect(msp, mdp)(UserShow)