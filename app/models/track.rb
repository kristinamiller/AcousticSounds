# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  genre_id    :integer
#  artist_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Track < ApplicationRecord
  validates :title, :artist_id, presence: true

  has_one_attached :photo

  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: :User

end
