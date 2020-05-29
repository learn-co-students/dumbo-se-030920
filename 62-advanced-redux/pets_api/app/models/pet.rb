class Pet < ApplicationRecord
  has_many :appointments
  has_many :users, through: :appointments
end
