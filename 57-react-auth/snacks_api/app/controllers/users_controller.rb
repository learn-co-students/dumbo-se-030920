class UsersController < ApplicationController

  def create
    @user = User.create(user_params())
    if @user.valid?
      render json: @user, status: 201
    else
      render json: {message: "Failed to create a new user"}, status: 403
    end
  end



  def login
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      render json: @user
    else
      render json: {message: "Incorrect username or password"}
    end
  end

  

  private

  def user_params
    params.permit(:username, :password)
  end


end
