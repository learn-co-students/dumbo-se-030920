require_relative "config/environment"
require 'rest-client'

puts "What would you like to search for?"
search_term = gets.chomp

url = "https://www.googleapis.com/books/v1/volumes?q=#{ search_term }"

response = RestClient.get(url)

books_hash = JSON.parse(response.body)

books_array = books_hash["items"]

# .first["volumeInfo"]["title"]

puts ""

books_array.each do |book|
  puts book["volumeInfo"]["title"]
end

# puts first_title


# binding.pry



0