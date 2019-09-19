// import { connect } from 'react-redux';
// import React from 'react';
// import UserTracks from './user_tracks';

// import { fetchUser } from '../../actions/user_actions';
// // import { userTrackSelector } from '../../reducers/selectors';

// function userTrackSelector(allTracks, userId) {
//   return Object.values(allTracks).filter((track) => track.artist_id == userId)
// }

// const msp = (state, ownProps) => {
//   // debugger
//   return {
//     tracks: userTrackSelector(state.entities.tracks, ownProps.match.params.userId),
//     user: state.entities.users[ownProps.match.params.userId]
//   }
// }


// const mdp = (dispatch) => ({
//   fetchTracks: () => dispatch(fetchTracks()),
//   fetchUser: (id) => dispatch(fetchUser(id))
// })

// export default connect(msp, mdp)(UserTracks)