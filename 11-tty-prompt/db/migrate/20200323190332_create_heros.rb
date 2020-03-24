class CreateHeros < ActiveRecord::Migration[5.2]
  def change
    create_table :heros do |t|
      t.string :hero_name
      t.string :alias
      t.integer :age
    end
  end
end
