class CreateToys < ActiveRecord::Migration[6.0]
  def change
    create_table :toys do |t|
      t.string :name
      t.integer :likes
      t.string :image

      t.timestamps
    end
  end
end
