class RenamePositionToTypeForUsersTable < ActiveRecord::Migration[5.1]
  def change
    rename_column :user_types, :position, :type
  end
end
