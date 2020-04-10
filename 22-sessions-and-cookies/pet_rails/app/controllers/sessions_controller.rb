class SessionsController < ApplicationController

  def reset_page_views
    session[:page_views_remaining] = 5

    redirect_back fallback_location: doctors_path
  end
end