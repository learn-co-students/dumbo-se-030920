class Hero < ActiveRecord::Base
  has_many :rosters
  # has_many :teams, through: :rosters
end
