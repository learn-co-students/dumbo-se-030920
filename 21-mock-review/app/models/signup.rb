class Signup < ApplicationRecord
  belongs_to :camper
  belongs_to :activity

  validates :time, numericality: {
    greater_than_or_equal_to: 0,
    less_than: 24
  }
  validates :time, presence: true


  # validates :column_name

end
