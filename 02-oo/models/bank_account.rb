class BankAccount

  attr_reader :balance  #same exact thing as my getter was doing
  attr_accessor :name
  # attr_writer :name

  def initialize(name="Geri Halliwell", initial_balance=0)
    @name = name
    @balance = initial_balance
  end

  def withdraw(amount)
    @balance -= amount
  end

  def deposit(amount)
    @balance += amount
  end

  def win_the_lottery
    deposit(1_000_000) # self is implicit unless you are calling a setter
    # @balance += 1_000_000
  end


  # def change_name_to_graham
  #   self.name = "Graham Troyer-Joy"
  # end

  # # getter 
  # def balance
  #   @balance
  # end

  # def name
  #   @name
  # end

  # # setter 
  # def name=(new_name)
  #   @name = new_name
  # end

end
