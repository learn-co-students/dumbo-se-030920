class Teacher < ApplicationRecord
  has_many :classrooms
  has_many :assignments, through: :classrooms


  def professor_name
    "Dr. #{self.name}"
  end

  def nice_timestamp_for_granny
    self.created_at.strftime("%H:%m")
  end


end
