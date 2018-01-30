class RenameUsersTypeTable < ActiveRecord::Migration[5.1]
  def change
    rename_table :user_type_tables, :user_types
  end
end
