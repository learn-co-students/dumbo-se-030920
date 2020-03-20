
Movie.destroy_all
Person.destroy_all
Favorite.destroy_all



prada = Movie.create!(title: "The Devil Wears Prada", year: 2005)
home_alone = Movie.create!(title: "Home Alone", year: 1990)
jojo_rabbit = Movie.create!(title: "Jojo Rabbit", year: 2019)
fargo = Movie.create!(title: "Fargo", year: 1998)

stephanie = Person.create!(name: "Stephanie")
jack = Person.create!(name: "Jack")
isabel = Person.create!(name: "Isabel")
donny = Person.create!(name: "Donny")

Favorite.create!(person_id: stephanie.id, movie_id: jojo_rabbit.id)
Favorite.create!(person_id: stephanie.id, movie_id: prada.id)
Favorite.create!(person_id: isabel.id, movie_id: prada.id)
Favorite.create!(person_id: isabel.id, movie_id: fargo.id)
Favorite.create!(person_id: donny.id, movie_id: prada.id)
Favorite.create!(person_id: donny.id, movie_id: fargo.id)
Favorite.create!(person_id: jack.id, movie_id: home_alone.id)
Favorite.create!(person_id: jack.id, movie_id: fargo.id)


puts "Done!"