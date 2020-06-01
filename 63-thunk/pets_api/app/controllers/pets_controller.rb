class PetsController < ApplicationController
  before_action :authorized, only: [:create]

  def index
    @pets = Pet.all
    render json: @pets
  end

  def create
    # byebug
    # @user is the person whose account is linked to the token
    @pet = Pet.create(params.permit(:name, :age, :breed))
    render json: @pet
  end

end
