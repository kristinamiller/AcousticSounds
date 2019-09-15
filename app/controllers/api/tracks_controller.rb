class Api::TracksController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def index 
    @tracks = Track.all
    render :index
  end

  def create
    @track = Track.new(track_params)
    @track.artist_id = current_user.id

    if @track.save 
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.find(params[:id])
  end

  def update
    
  end

  def destroy
    @track = Track.find(params[:id])
    if @track.destroy
      render :track
    else
      render json: @post.errors.full_messages, status: 422
    end

  end

  private

  def track_params
    params.require(tracks).permit(
      :title,
      :description,
      :genre_id
    )
  end


end
