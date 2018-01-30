class UserType < ApplicationRecord
  validates :user_type, presence: true
  validates :user_type, uniqueness: true
end
