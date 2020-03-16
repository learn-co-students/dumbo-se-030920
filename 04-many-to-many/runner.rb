require 'pry'

require_relative 'flight'
require_relative 'passenger'
require_relative 'ticket'

gabby = Passenger.new("Gabby")
xavier = Passenger.new("Xavier")
trevor = Passenger.new("Trevor")
gary = Passenger.new("Gary")
donny = Passenger.new("Donny")

lalaland = Flight.new("JFK - LAX")
london = Flight.new("JFK - LDN")
crosstown = Flight.new("JFK - LGA")
beijing = Flight.new("JFK - PEK")
nola = Flight.new("LGA - MSY")
paris = Flight.new("LGA - CDG")

Ticket.new(gabby, lalaland)
Ticket.new(gabby, paris)
Ticket.new(xavier, london)
Ticket.new(xavier, lalaland)
Ticket.new(trevor, lalaland)
Ticket.new(trevor, beijing)
Ticket.new(gary, crosstown)
Ticket.new(gary, lalaland)
Ticket.new(donny, nola)

binding.pry

false
