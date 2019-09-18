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

  validate :ensure_photo
  validate :ensure_audio

  has_one_attached :photo

  has_one_attached :audio

  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: :User

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end
  def ensure_audio
    unless self.audio.attached?
      errors[:audio] << "must be attached"
    end
  end

end
