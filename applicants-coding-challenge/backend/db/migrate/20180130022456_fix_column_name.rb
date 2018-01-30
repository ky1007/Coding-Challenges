class FixColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :user_type, :user_type_id
  end
end
