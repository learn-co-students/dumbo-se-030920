class AddAgeToStudents < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :age, :integer
  end
end
