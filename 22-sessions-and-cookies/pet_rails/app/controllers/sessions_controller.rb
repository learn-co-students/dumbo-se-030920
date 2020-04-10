class SessionsController < ApplicationController

  def reset_views
    session[:views_remaining] = 3

    # response
    redirect_back(fallback_location: doctors_path)
  end
end