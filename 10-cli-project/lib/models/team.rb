class Team < ActiveRecord::Base
  belongs_to :user

  has_many :rosters
  has_many :heros, through: :rosters
end
