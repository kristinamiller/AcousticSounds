# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  display_name    :string
#  first_name      :string
#  last_name       :string
#  city            :string
#  country         :string
#  bio             :text
#

require 'open-uri'

class User < ApplicationRecord

  validates :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true

  has_many :tracks,
  foreign_key: :artist_id,
  class_name: :Track

  has_many :comments,
  foreign_key: :user_id,
  class_name: :Comment

  has_one_attached :photo

  validate :ensure_photo

  def ensure_photo
    unless self.photo.attached?
      self.photo.attach(io: open('https://acousticsounds-dev.s3-us-west-1.amazonaws.com/dark-guitar.jpg'), filename: 'dark-guitar.jpg')
    end
  end


  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
end
