class Toy < ApplicationRecord
  validates_uniqueness_of :name
end
