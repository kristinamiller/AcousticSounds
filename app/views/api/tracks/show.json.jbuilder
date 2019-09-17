json.extract! @track, :id, :title, :description, :genre_id, :artist_id

json.imageURL url_for(@track.photo)
