class SnacksController < ApplicationController
  before_action :authorized, only: [:create]

  def create
    @snack = @user.snacks.create(name: params[:name])
    render json: @snack
  end


end
