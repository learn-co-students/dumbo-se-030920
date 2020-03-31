class CreateBreaks < ActiveRecord::Migration
  def change
    create_table :breaks do |t|
      t.string :animal_video
      t.string :break_time
      t.integer :length
      t.string :category
    end
  end
end