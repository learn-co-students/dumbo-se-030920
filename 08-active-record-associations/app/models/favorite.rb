class Favorite < ActiveRecord::Base

  # Person instance who this Favorite belongs to
  belongs_to :person
  # def person
  #   Person.find(self.person_id)
  # end

  # Movie instance who this Favorite belongs to
  belongs_to :movie
  # def movie
  #   Movie.find(self.movie_id)
  # end

end