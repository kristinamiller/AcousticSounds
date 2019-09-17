

@tracks.each do | track |
  json.set! track[:id] do
  json.extract! track, :id, :title, :description, :genre_id, :artist_id
  json.imageURL url_for(track.photo)
  json.audioURL url_for(track.audio)
end
end