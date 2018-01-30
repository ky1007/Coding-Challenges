class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :zip_code
      t.text :coding_test
      t.boolean :admitted
      t.integer :user_type

      t.timestamps
    end
  end
end
