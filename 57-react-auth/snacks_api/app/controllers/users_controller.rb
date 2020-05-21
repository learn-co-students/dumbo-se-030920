class UsersController < ApplicationController

  def create
    @user = User.create(user_params())
    if @user.valid?
      render json: @user, status: 201
    else
      render json: {message: "Failed to create a new user"}, status: 403
    end
  end

  private

  def user_params
    params.permit(:username, :password)
  end


end
