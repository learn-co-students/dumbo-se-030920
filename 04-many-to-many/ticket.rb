class Ticket

  @@all = []

  attr_reader :passenger, :flight

  def initialize(passenger, flight)
    @passenger = passenger
    @flight = flight
    @@all << self # an instance of a ticket being shoveled into an array
  end

  def self.all # self is the class, so this is a class method
    @@all
  end

  def inspect
    "#<Ticket #{ passenger.name } #{ flight.route }>"
  end

end