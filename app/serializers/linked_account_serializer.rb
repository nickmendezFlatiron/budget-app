class LinkedAccountSerializer < ActiveModel::Serializer
  attributes :id, :institution, :balance, :name
  has_one :user
end
