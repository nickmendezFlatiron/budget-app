class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name, :email, :account_type, :password_digest
end
