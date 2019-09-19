class Api::TracksController < ApplicationController

  before_action :require_login, only: [:create]

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
      render json: @track.errors.full_messages, status: 422
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
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end

  end

  private

  def track_params
    params.require(:track).permit(
      :title,
      :description,
      :genre_id,
      :artist_id,
      :photo,
      :audio
    )
  end


end
