class ListsController < ApplicationController

  def index
    @lists = List.all
    render json: @lists, only: [:id, :list_name, :contributions], include: :items
  end

  def create
    @list = List.create(params.permit(:list_name, :contributions))
    render json: @list, only: [:id, :list_name, :contributions], include: :items
  end

  def update
    @list = List.find(params[:id])
    @list.update(params.permit(:contributions))
    render json: @list, only: [:id, :list_name, :contributions], include: :items
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render json: @list, only: [:id, :list_name, :contributions], include: :items
  end
  
end
