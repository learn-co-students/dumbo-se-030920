require 'pry'
require_relative 'models/user'
require_relative 'models/tweet'

coffee_dad = User.new("coffee_dad")
jersey = User.new("NJGov")

tweet1 = coffee_dad.post_tweet("Having coffee")
tweet2 = coffee_dad.post_tweet("Drinking coffee#")
tweet3 = coffee_dad.post_tweet("They must pay for what they have done.")
tweet4 = coffee_dad.post_tweet("Enjoying a cup #of coffee")

tweet5 = jersey.post_tweet("your mom")
tweet6 = jersey.post_tweet("coronavirus is no excuse for racism")


binding.pry

false

