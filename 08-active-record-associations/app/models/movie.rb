class Movie < ActiveRecord::Base

  # array of Favorite instances that belong to this movie
  def favorites 
  end

  # array of User instances who favorited this movie
  def favoriters 
  end


end