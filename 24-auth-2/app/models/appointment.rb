class Appointment < ApplicationRecord
  belongs_to :pet
  belongs_to :doctor
end
