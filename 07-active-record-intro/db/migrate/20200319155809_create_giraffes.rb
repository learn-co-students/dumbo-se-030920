class CreateGiraffes < ActiveRecord::Migration[5.2]
  def change
    create_table :giraffes do |t|
      t.string :name
      t.integer :neck_length
      t.timestamps
    end
  end
end
