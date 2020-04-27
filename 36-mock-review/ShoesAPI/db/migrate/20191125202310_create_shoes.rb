class CreateShoes < ActiveRecord::Migration[6.0]
  def change
    create_table :shoes do |t|
      t.string :name
      t.string :company
      t.integer :price
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end
