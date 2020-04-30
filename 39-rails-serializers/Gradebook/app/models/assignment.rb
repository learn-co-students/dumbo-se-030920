class Assignment < ApplicationRecord
  belongs_to :classroom
  delegate :teacher, to: :classroom

  # def teacher
    # self.classroom.teacher
  # end
end
