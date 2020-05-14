class ItemsController < ApplicationController

  def create
    @list = List.find_by(id: params[:list_id])
    if @list
      @item = @list.items.create(params.permit(:name))
      render json: @item
    else
      render json: {message: "Invalid List"}
    end
  end

  
end
