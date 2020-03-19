class Cat < Animal

  include LandMobility

  attr_reader :lives

  def initialize(name, mood = "nervous", lives = 9)
    super(name, mood)
    @lives = lives
  end

  def speak
    super("Meow")
  end

end 