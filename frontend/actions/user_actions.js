import * as UsersUtil from '../utils/users_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

export const fetchUser = (id) => (dispatch) => (
  UsersUtil.fetchUser(id).then((user) => dispatch(receiveUser(user)))
)