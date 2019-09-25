# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first) ***

require 'open-uri'

ActiveRecord::Base.transaction do 

  User.destroy_all
  Track.destroy_all
  Comment.destroy_all

  user3 = User.create!(email: 'mollytuttle@gmail.com', password: 'fullstack123', display_name: 'Molly Tuttle')
  user3.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/molly-cool.jpg'), filename: 'molly-cool.jpg')

  user7 = User.create!(email: 'mariaquiles@gmail.com', password: 'fullstack123', display_name: 'Quiles and Cloud')
  user7.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/maria-rory.jpg'), filename: 'maria-rory.jpg')

  user6 = User.create!(email: 'elenalambertson@gmail.com', password: 'fullstack123', display_name: 'Elena Lambertson')
  user6.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/elena-lambertson-smile.jpg'), filename: 'elena-lambertson-smile.jpg')

  user1 = User.create!(email: 'scrogginsandrose@email.com', password: 'password', display_name: 'Scroggins and Rose')
  user1.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/scroggins-rose-boat.jpg'), filename: 'scroggins-rose-boat.jpg')

  user4 = User.create!(email: 'billystrings@gmail.com', password: 'fullstack123', display_name: 'Billy Strings')
  user4.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/billy-strings.jpg'), filename: 'billy-strings.jpg')


  user5 = User.create!(email: 'burlhaggard@gmail.com', password: 'fullstack123', display_name: 'Burl Haggard')
  user5.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/burl-band.jpg'), filename: 'burl-band.jp')


  user8 = User.create!(email: 'demouser@acousticsounds.com', password: 'fullstack123', display_name: 'Demo User')
  user8.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/dark-guitar.jpg'), filename: 'dark-guitar.jpg')


  track5 = Track.create!(title: "Red Prairie Dawn", artist_id: user3.id) 
  track5.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/red-prairie-dawn.mp3'), filename: 'red-prairie-dawn.mp3')
  track5.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/john-album.jpg'), filename: 'john-album.jpg')

  track12 = Track.create!(title: "While I'm Waiting Here", artist_id: user4.id) 
  track12.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/while-im-waiting-here.mp3'), filename: 'while-im-waiting-here.mp3')
  track12.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/billy-studio.jpg'), filename: 'billy-studio.jpg')

  track19 = Track.create!(title: "The Road is Not My Refuge", artist_id: user6.id) 
  track19.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/elena-road-not-my-refuge.mp3'), filename: 'elena-road-not-my-refuge.mp3')
  track19.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/elena-banjo.jpg'), filename: 'elena-banjo.jpg')

  track14 = Track.create!(title: "Fritz Road", artist_id: user1.id) 
  track14.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fritz-road.mp3'), filename: 'fritz-road.mp3')
  track14.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/scroggins-rose-fritz.jpg'), filename: 'scroggins-rose-fritz.jpg')

  track9 = Track.create!(title: "By the Rio Grande", artist_id: user7.id) 
  track9.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/rio-grande.mp3'), filename: 'rio-grande.mp3')
  track9.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/quiles-hair.jpg'), filename: 'quiles-hair.jpg')

  track3 = Track.create!(title: "Gentle On My Mind", artist_id: user3.id) 
  track3.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/gentle-on-my-mind.mp3'), filename: 'gentle-on-my-mind.mp3')
  track3.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/molly-grass.jpg'), filename: 'molly-grass.jpg')




  track1 = Track.create!(title: "Good Enough", artist_id: user3.id) 
  track1.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/good-enough.mp3'), filename: 'good-enough.mp3')
  track1.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/molly-jumpsuit.jpg'), filename: 'molly-jumpsuit.jpg')

  track2 = Track.create!(title: "Rain and Snow", artist_id: user3.id) 
  track2.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/rain-and-snow-fiddle.mp3'), filename: 'rain-and-snow-fiddle.mp3')
  track2.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/molly-shadow.jpg'), filename: 'molly-shadow.jpg')

  track4 = Track.create!(title: "Fiddler of Dooney", artist_id: user3.id) 
  track4.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddler-of-dooney.mp3'), filename: 'fiddler-of-dooney.mp3')
  track4.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/john-album.jpg'), filename: 'john-album.jpg')


  track5 = Track.create!(title: "Salt Spring", artist_id: user8.id) 
  track5.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/salt-spring.mp3'), filename: 'salt-spring.mp3')
  track5.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddle-straight.jpg'), filename: 'fiddle-straight.jpg')

  track6 = Track.create!(title: "Little Pine Siskin", artist_id: user8.id) 
  track6.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/little-pine-siskin.mp3'), filename: 'little-pine-siskin.mp3')
  track6.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddle-straight.jpg'), filename: 'fiddle-straight.jpg')

  track7 = Track.create!(title: "Black Sky Lightning", artist_id: user7.id) 
  track7.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/black-sky-lightning.mp3'), filename: 'black-sky-lightning.mp3')
  track7.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/quiles-black-stage.jpg'), filename: 'quiles-black-stage.jpg')

  track8 = Track.create!(title: "On My Way Tonight", artist_id: user7.id) 
  track8.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/on-my-way-tonight.mp3'), filename: 'on-my-way-tonight.mp3')
  track8.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/quiles-cloud-grass.jpg'), filename: 'quiles-cloud-grass.jpg')

  track10 = Track.create!(title: "Doin' Things Right", artist_id: user4.id) 
  track10.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/doin-things-right.mp3'), filename: 'doin-things-right.mp3')
  track10.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/billy-rainbow.jpg'), filename: 'billy-rainbow.jpg')

  track11 = Track.create!(title: "Taking Water", artist_id: user4.id) 
  track11.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/taking-water.mp3'), filename: 'taking-water.mp3')
  track11.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/billy-album.jpg'), filename: 'billy-album.jpg')

  track13 = Track.create!(title: "Eagle's Nest", artist_id: user1.id) 
  track13.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/eagles-nest.mp3'), filename: 'salt-spring.mp3')
  track13.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/grana.jpg'), filename: 'grana.jpg')

  track15 = Track.create!(title: "Keeping a Light On", artist_id: user5.id) 
  track15.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/keeping-light-on.mp3'), filename: 'keeping-light-on.mp3')
  track15.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/burl-haggard.jpg'), filename: 'burl-haggard.jpg')

  track16 = Track.create!(title: "Palm Springs Jump", artist_id: user5.id) 
  track16.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/palm-springs-jump.mp3'), filename: 'palm-springs-jump.mp3')
  track16.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/burl-haggard.jpg'), filename: 'burl-haggard.jpg')

  track17 = Track.create!(title: "Sweet Sue", artist_id: user5.id) 
  track17.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/sweet-sue.mp3'), filename: 'sweet-sue.mp3')
  track17.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/burl-haggard.jpg'), filename: 'burl-haggard.jpg')

  track18 = Track.create!(title: "Only Hope", artist_id: user6.id) 
  track18.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/elena-only-hope.mp3'), filename: 'elena-only-hope.mp3')
  track18.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/elena-banjo.jpg'), filename: 'elena-banjo.jpg')

  comment1 = Comment.create!(user_id: user3.id, track_id: track19.id, body: "This girl can sing a house on fire.")

  
  comment1 = Comment.create!(user_id: user3.id, track_id: track19.id, body: "This girl can sing a house on fire.")

  comment2 = Comment.create!(user_id: user5.id, track_id: track19.id, body: "Equal parts goodness and equal parts sin.")

  comment3 = Comment.create!(user_id: user4.id, track_id: track19.id, body: "While we’re young and resilient, while we’re feeling so fancy free.")

  comment4 = Comment.create!(user_id: user7.id, track_id: track19.id, body: "The pieces of me, she gathers them and gives them back to me in all the right order.")

  comment5 = Comment.create!(user_id: user1.id, track_id: track9.id, body: "Too lonesome to cry.")

  comment6 = Comment.create!(user_id: user6.id, track_id: track9.id, body: "The ebb and flow of tragedy has hardened my heart.")

  comment7 = Comment.create!(user_id: user4.id, track_id: track9.id, body: "Waves keep pounding through the night,  lost without a ray of light.")

  comment8 = Comment.create!(user_id: user5.id, track_id: track9.id, body: "If life is really as short as they say, then why is the night so long?")


  


end