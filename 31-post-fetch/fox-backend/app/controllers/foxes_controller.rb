class FoxesController < ApplicationController
    def index
        foxes = Fox.all
        render json: foxes
    end

    def random
      fox = Fox.all.sample
      render json: fox
    end

    def show
      fox = Fox.find(params[:id])
      render json: fox
    end

    def create
      byebug
    end

    def update
        fox = Fox.find(params[:id])
        fox.update(fox_params)
        render json: fox
    end

    private
    def fox_params
        params.permit(:name, :img_url)
    end






















end
