class Animal

  # attr_accessor :whatever

  attr_accessor :mood
  attr_reader :name

  def initialize(name, mood = "nervous")
    @name = name
    @mood = mood
    @whatever = 42
  end

  def speak(word = "sup")
    puts word
  end

end