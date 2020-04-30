class TeacherSerializer < ActiveModel::Serializer
  # attributes in serializer take in instance methods as symbols
    # when we want to send out relationships, you might not want to use attributes
  attributes :id, :name, :professor_name, :nice_timestamp_for_granny

  # when we use AR macros, we're telling the TeacherSerializer to call on the ClassroomSerializer
  has_many :classrooms
end
