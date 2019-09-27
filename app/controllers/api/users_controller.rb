class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    
  end

  def user_params
    params.require(:user).permit(
      :email, 
      :password, 
      :display_name, 
      :first_name, 
      :last_name,
      :city,
      :country,
      :bio,
      :photo
      )
  end

end
