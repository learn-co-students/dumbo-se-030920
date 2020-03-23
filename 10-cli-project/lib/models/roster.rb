class Roster < ActiveRecord::Base
  belongs_to :hero
  belongs_to :team
end
