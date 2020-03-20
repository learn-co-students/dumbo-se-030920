class CreateSpiceGirls < ActiveRecord::Migration[5.2]
  def change
    create_table :spice_girls do |t|
      t.string :name
      t.integer :spiciness
      t.timestamps
    end
  end
end
