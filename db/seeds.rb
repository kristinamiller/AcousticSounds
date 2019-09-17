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

  user1 = User.create!(email: 'test@email.com', password: 'password', display_name: 'Test User')
  user1.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddle-closeup.jpg'), filename: 'fiddle-closeup.jpg')

  user2 = User.create!(email: 'demouser@acousticsounds.com', password: 'fullstack123', display_name: 'Demo User')
  user2.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/dark-guitar.jpg'), filename: 'dark-guitar.jpg')

  user3 = User.create!(email: 'mollytuttle@gmail.com', password: 'fullstack123', display_name: 'Molly Tuttle')
  user3.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/molly-filter.jpg'), filename: 'molly-filter.jpg')

  user4 = User.create!(email: 'billystrings@gmail.com', password: 'fullstack123', display_name: 'Billy Strings')
  user4.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/dark-guitar.jpg'), filename: 'dark-guitar.jpg')

  user5 = User.create!(email: 'burlhaggard@gmail.com', password: 'fullstack123', display_name: 'Burl Haggard')
  user5.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/dark-guitar.jpg'), filename: 'dark-guitar.jpg')

  user6 = User.create!(email: 'elenalambertson@gmail.com', password: 'fullstack123', display_name: 'Elena Lambertson')
  user6.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/dark-guitar.jpg'), filename: 'dark-guitar.jpg')

  user7 = User.create!(email: 'mariaquiles@gmail.com', password: 'fullstack123', display_name: 'Maria Quiles')
  user7.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/dark-guitar.jpg'), filename: 'dark-guitar.jpg')

  user8 = User.create!(email: 'scrogginsandrose@gmail.com', password: 'fullstack123', display_name: 'Scroggins and Rose')
  user8.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/dark-guitar.jpg'), filename: 'dark-guitar.jpg')
    

  track1 = Track.create!(title: "Good Enough", artist_id: user3.id) 
  track1.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/good-enough.mp3'), filename: 'good-enough.mp3')
  track1.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/molly-logo.jpg'), filename: 'molly-logo.jpg' )

  track2 = Track.create!(title: "Rain and Snow", artist_id: user3.id) 
  track2.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/rain-and-snow-fiddle.mp3'), filename: 'rain-and-snow-fiddle.mp3')
  track2.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/molly-tuttle.jpg'), filename: 'molly-tuttle.jpg' )

  track3 = Track.create!(title: "Gentle On My Mind", artist_id: user3.id) 
  track3.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/gentle-on-my-mind.mp3'), filename: 'gentle-on-my-mind.mp3')
  track3.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/molly-john.jpg'), filename: 'molly-john.jpg' )

  track4 = Track.create!(title: "Salt Spring", artist_id: user2.id) 
  track4.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/salt-spring.mp3'), filename: 'salt-spring.mp3')
  track4.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddle-straight.jpg'), filename: 'fiddle-straight.jpg' )

  track5 = Track.create!(title: "Salt Spring", artist_id: user2.id) 
  track5.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/salt-spring.mp3'), filename: 'salt-spring.mp3')
  track5.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddle-straight.jpg'), filename: 'fiddle-straight.jpg' )

  track5 = Track.create!(title: "Salt Spring", artist_id: user2.id) 
  track5.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/salt-spring.mp3'), filename: 'salt-spring.mp3')
  track5.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddle-straight.jpg'), filename: 'fiddle-straight.jpg' )

  track6 = Track.create!(title: "Salt Spring", artist_id: user2.id) 
  track6.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/salt-spring.mp3'), filename: 'salt-spring.mp3')
  track6.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddle-straight.jpg'), filename: 'fiddle-straight.jpg' )

  track6 = Track.create!(title: "Salt Spring", artist_id: user2.id) 
  track6.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/salt-spring.mp3'), filename: 'salt-spring.mp3')
  track6.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddle-straight.jpg'), filename: 'fiddle-straight.jpg' )

  track7 = Track.create!(title: "Salt Spring", artist_id: user2.id) 
  track7.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/salt-spring.mp3'), filename: 'salt-spring.mp3')
  track7.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddle-straight.jpg'), filename: 'fiddle-straight.jpg' )

  track8 = Track.create!(title: "Salt Spring", artist_id: user2.id) 
  track8.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/salt-spring.mp3'), filename: 'salt-spring.mp3')
  track8.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddle-straight.jpg'), filename: 'fiddle-straight.jpg' )

  track9 = Track.create!(title: "Salt Spring", artist_id: user2.id) 
  track9.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/salt-spring.mp3'), filename: 'salt-spring.mp3')
  track9.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddle-straight.jpg'), filename: 'fiddle-straight.jpg' )

  track10 = Track.create!(title: "Salt Spring", artist_id: user2.id) 
  track10.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/salt-spring.mp3'), filename: 'salt-spring.mp3')
  track10.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddle-straight.jpg'), filename: 'fiddle-straight.jpg' )

  track11 = Track.create!(title: "Salt Spring", artist_id: user2.id) 
  track11.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/salt-spring.mp3'), filename: 'salt-spring.mp3')
  track11.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddle-straight.jpg'), filename: 'fiddle-straight.jpg' )

  track12 = Track.create!(title: "Salt Spring", artist_id: user2.id) 
  track12.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/salt-spring.mp3'), filename: 'salt-spring.mp3')
  track12.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddle-straight.jpg'), filename: 'fiddle-straight.jpg' )

  track13 = Track.create!(title: "Salt Spring", artist_id: user2.id) 
  track13.audio.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/salt-spring.mp3'), filename: 'salt-spring.mp3')
  track13.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/fiddle-straight.jpg'), filename: 'fiddle-straight.jpg' )

  


end