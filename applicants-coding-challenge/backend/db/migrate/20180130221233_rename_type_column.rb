class RenameTypeColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :user_types, :type, :user_type
  end
end
