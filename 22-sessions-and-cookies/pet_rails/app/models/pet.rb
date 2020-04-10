class Pet < ApplicationRecord

  has_many :appointments
  has_many :doctors, through: :appointments

  # a pet must have a name
  validates :name, presence: true
  
  # 2. Pet name can't be more than 20 characters
  validates :name, length: { maximum: 20, message: "can't be more than 20 characters" }

  # 1. validate Pet age, can't be older than 80
  validates :age, numericality: { less_than_or_equal_to: 80 }
    
  
  # 1a. validate age based on the breed (cat can't be older than 25 * 12 months, dog can't be older than 20 * 12 months)
  # validate :age_based_on_breed

  # def age_based_on_breed
  #   # write some custom logic to evaluate this instance
  #   if self.breed == "dog" && self.age > 12 * 20
  #     # if it doesn't pass our validations, add an error
  #     errors.add(:age, "can't be greater than #{12 * 20} months for dogs")
  #   end
  # end
  
  
  # 3. Pet age must be greater than 4 months
end
