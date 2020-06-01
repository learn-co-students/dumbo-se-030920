class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :breed
end
