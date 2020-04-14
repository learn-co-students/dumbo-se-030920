class User < ActiveRecord::Base
  has_many :tweets

  has_many :likes
  has_many :tweets_i_likes, through: :likes, source: :tweet
end
