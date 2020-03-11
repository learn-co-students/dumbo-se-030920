class Tweet

  attr_reader :message, :user

  def initialize(message, user)
    @message = message
    @user = user
  end

  def self.all #class method

  end

end