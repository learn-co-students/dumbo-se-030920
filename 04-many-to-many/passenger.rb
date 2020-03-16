class Passenger

  @@all = []

  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def tickets # return an array of this passenger's ticket instances
    # this_passengers_ticket_instances = []
    # Ticket.all.each do |ticket|
    #   if ticket.passenger == self
    #     this_passengers_ticket_instances << ticket
    #   end
    # end
    # this_passengers_ticket_instances
    Ticket.all.select do |ticket|
      ticket.passenger == self
    end
  end

  def flights # return an array of flight instances
    # my_flights = []
    # self.tickets.each do |ticket|
    #   my_flights << ticket.flight
    # end
    # my_flights

    tickets.map do |ticket|
      ticket.flight
    end
    # tickets.map(&:flight)
  end

end
