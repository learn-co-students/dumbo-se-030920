class Person < ActiveRecord::Base

  # array of Favorite instances that belong to this person
  has_many :favorites
  # def favorites
  #   # Favorite.all.select do |fav|
  #   #   fav.person == self
  #   # end
  #   Favorite.all.where(person_id: self.id)
  # end

  # array of Movie instances that this person favorited
  has_many :favorite_movies, through: :favorites, source: :movie
  # def favorite_movies
  #   # favorites.map do |favorite| 
  #   #   favorite.movie
  #   # end
  #   favorites.map(&:movie)
  #   # Movie.where(id: favorites.pluck(:movie_id))
  # end

end