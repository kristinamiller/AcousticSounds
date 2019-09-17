import * as TracksUtil from '../utils/tracks_util';

export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';

const receiveAllTracks = (tracks) => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
})

const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track
})

const removeTrack = (track) => ({
  type: REMOVE_TRACK,
  trackId: track.id
})

export const fetchTracks = () => (dispatch) => (
  TracksUtil.fetchTracks().then((tracks) => dispatch(receiveAllTracks(tracks)))
)
export const fetchTrack = (id) => (dispatch) => (
  TracksUtil.fetchTrack(id).then((track) => dispatch(receiveTrack(track)))
)
export const createTrack = (track) => (dispatch) => { 
  return TracksUtil.createTrack(track).then((track) => dispatch(receiveTrack(track)))
}
export const updateTrack = (track) => (dispatch) => (
  TracksUtil.updateTrack(track).then((track) => dispatch(receiveTrack(track)))
)
export const deleteTrack = (id) => (dispatch) => (
  TracksUtil.deleteTrack(id).then((track) => dispatch(removeTrack(track)))
)
