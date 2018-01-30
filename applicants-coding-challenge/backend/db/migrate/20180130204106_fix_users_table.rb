class FixUsersTable < ActiveRecord::Migration[5.1]
  def change
    change_column_null :users, :first_name, false
    change_column_null :users, :last_name, false
    change_column_null :users, :email, false
    change_column_null :users, :zip_code, false
    add_index :users, :user_type_id
    add_index :users, :email
  end
end