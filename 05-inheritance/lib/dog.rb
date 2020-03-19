class Dog < Animal

  include LandMobility

  # alias_method :pupper_mood, :mood

  # def mood
  #   super.upcase
  # end

  def speak
    super("Woof")
  end

end 