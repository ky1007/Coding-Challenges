class CreateUserTypeTable < ActiveRecord::Migration[5.1]
  def change
    create_table :user_type_tables do |t|
      t.string :position, null: false
    end
  end
end
