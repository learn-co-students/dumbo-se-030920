class ClassroomSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :assignments
  # belongs_to :teacher
end
