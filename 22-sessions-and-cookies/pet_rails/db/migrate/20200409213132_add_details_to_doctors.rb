class AddDetailsToDoctors < ActiveRecord::Migration[6.0]
  def change
    add_column :doctors, :rating, :decimal
    add_column :doctors, :specialization, :string
    add_column :doctors, :image_url, :string
  end
end
