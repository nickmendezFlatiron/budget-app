class LinkedAccountSerializer < ActiveModel::Serializer
  attributes :id, :institution, :balance, :name

end
