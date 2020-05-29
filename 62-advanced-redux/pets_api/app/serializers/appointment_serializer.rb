class AppointmentSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :pet
end
