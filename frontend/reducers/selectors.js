

export function userTrackSelector (allTracks, userId){
  return Object.values(allTracks).filter((track) => track.artist_id === userId)
}