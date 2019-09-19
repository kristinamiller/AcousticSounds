class Api::CommentsController < ApplicationController

   before_action :require_login

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.link_id = params[:link_id]
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end

end
