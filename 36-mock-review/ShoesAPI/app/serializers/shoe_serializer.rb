class ShoeSerializer < ActiveModel::Serializer
  attributes :id, :name, :company, :price, :image, :description
  has_many :reviews
end
