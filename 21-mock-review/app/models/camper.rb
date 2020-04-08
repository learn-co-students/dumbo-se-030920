class Camper < ApplicationRecord
  has_many :signups
  has_many :activities, through: :signups

  # validates :name, uniqueness: true
  # validates_uniqueness_of :name
end
