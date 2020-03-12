class User

  attr_reader :username

  def initialize(username)
    @username = username
    # @tweets = [] # THIS IS A SECONDARY SOURCE OF TRUTH AND WILL LEAD TO PAIN
  end

  def post_tweet(message)
    # create a tweet instance
    tweet = Tweet.new(message, self) # self is instance of the user that we called post_tweet on
    @tweets << tweet
  end

  def tweets
    # @tweets
    # use self for something 
    Tweet.all.select do |tweet|
      # binding.pry
      tweet.user == self
    end
  end

  # def regret_last_tweet!

  # end

  # def self.all

  # end

  # def something
  #   Tweet.all
  # end

end