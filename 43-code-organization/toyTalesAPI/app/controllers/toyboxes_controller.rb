class ToyboxesController < ApplicationController

  def index
    @toyboxes = Toybox.all
    render json: @toyboxes, include: :toys
  end
end
