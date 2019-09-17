import * as UsersUtil from '../utils/users_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})
const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
})

export const fetchUser = (id) => (dispatch) => (
  UsersUtil.fetchUser(id).then((user) => dispatch(receiveUser(user)))
)

export const fetchUsers = () => (dispatch) => (
  UsersUtil.fetchUsers().then((users) => dispatch(receiveAllUsers(users))) 
)