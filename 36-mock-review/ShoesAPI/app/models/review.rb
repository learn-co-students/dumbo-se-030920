class Review < ApplicationRecord
  belongs_to :shoe
  validates :content, presence: true
end
