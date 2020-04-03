class PetsController < ApplicationController

  def index
    @pets = Pet.all
    # render :index
  end

  def show
    @pet = Pet.find(params[:id])
  end


end
