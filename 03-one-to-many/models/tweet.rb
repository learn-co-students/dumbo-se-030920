class Tweet

  @@all = []

  attr_reader :message, :user

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end

  def self.all #class method
    @@all
  end

  def inspect
    "#<Tweet from #{ self.user.username } '#{ self.message }'>"
  end

end