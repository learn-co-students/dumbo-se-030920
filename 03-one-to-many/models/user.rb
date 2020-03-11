class User

  attr_reader :username

  def initialize(username)
    @username = username
  end

  def post_tweet(message)
    # create a tweet instance
    tweet = Tweet.new(message, self)
  end

end