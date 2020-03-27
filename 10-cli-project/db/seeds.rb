Hero.destroy_all
User.destroy_all
Roster.destroy_all
Team.destroy_all

eric = User.create(username: "Eric")
sylwia = User.create(username: "Sylwia")
rei = User.create(username: "Rei")


imaginary = Team.create(name: "Imaginary Group of Friends", user_id: eric.id)
superheros = Team.create(name: "Team of Super Heros", user: sylwia)
rei.teams.create(name: "The Villain Team")

spider= Hero.create(hero_name: "Spiderman", alias: "Peter Parker", age: rand(18))

superman = Hero.create(hero_name: "Superman", alias: "Clark Kent", age: rand(18))

john = Hero.create(hero_name: "John", alias: "John", age: rand(18))

Roster.create(hero: superman, team: superheros)
Roster.create(hero: spider, team: superheros)
Roster.create(hero: john, team: imaginary)

puts "Done seeding!!!"
