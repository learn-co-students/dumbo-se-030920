class ShoesController < ApplicationController

  def index
    @shoes = Shoe.order(:id)
    render json: @shoes
  end

  def show
    @shoe = Shoe.find(params[:id])
    render json: @shoe
  end

end
