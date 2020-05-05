class ToysController < ApplicationController

  def destroy
    @toy = Toy.find(params[:id])
    @toy.destroy
    render json: @toy
  end
  
end
