class CreateRosters < ActiveRecord::Migration[5.2]
  def change
    create_table :rosters do |t|
      t.integer :hero_id
      t.integer :team_id
    end
  end
end
