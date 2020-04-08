class CampersController < ApplicationController

  def index
    @campers = Camper.all
  end

  def show
    @camper = Camper.find(params[:id])
  end

  def new
    @camper = Camper.new
  end

  def create
    @camper = Camper.create(camper_params)
    redirect_to @camper
    # redirect_to camper_path(@camper)
  end

  private

  def camper_params
    params.require(:camper).permit(:name, :age)
  end

end
