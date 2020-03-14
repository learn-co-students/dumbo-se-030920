require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

start1 = Startup.new("Twitter", "Jane", "twitter.com")
start2 = Startup.new("Google", "Harold", "google.com")
start3 = Startup.new("Facebook","Nkosi", "facebook.com")
start4 = Startup.new("Flatiron", "Laurel", "flatiron.com")
start5 = Startup.new("Twitter", "Rei", "twitter.com")

cap1 = VentureCapitalist.new("Big Bucks", 20_000_000)
cap2 = VentureCapitalist.new("Lil Bucks", 900_000_000)
cap3 = VentureCapitalist.new("Few Bucks", 1_000_000)
cap4 = VentureCapitalist.new("Broke AF", 100)
start1.sign_contract(cap1, "angel", 2000)
start1.sign_contract(cap2, "ange", 500)
start1.sign_contract(cap3, "ang", 900)
start2.sign_contract(cap4, "an", 1800)
start2.sign_contract(cap1, "a", 3000)
start2.sign_contract(cap2, "al", 10000)
start3.sign_contract(cap3, "ael", 4000)
start3.sign_contract(cap4, "agel", 6000)
start1.sign_contract(cap2, "ange", 600)
start1.sign_contract(cap2, "ange", 500)
start1.sign_contract(cap2, "ange", 1000)
start1.sign_contract(cap2, "ange", 500)

binding.pry
0 #leave this here to ensure binding.pry isn't the last line