class User < ApplicationRecord
  validates :first_name, :last_name, :email, :zip_code, :user_type_id, presence: true
  validates :email, uniqueness: true

  belongs_to :user_type,
    foreign_key: :user_type_id,
    class_name: :UserType
end
