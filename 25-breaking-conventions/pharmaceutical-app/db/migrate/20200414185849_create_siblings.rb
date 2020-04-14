class CreateSiblings < ActiveRecord::Migration[6.0]
  def change
    create_table :siblings do |t|
      t.integer :old_id
      t.integer :young_id

      t.timestamps
    end
  end
end
