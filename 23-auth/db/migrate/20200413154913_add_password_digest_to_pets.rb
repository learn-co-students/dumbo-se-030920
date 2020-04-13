class AddPasswordDigestToPets < ActiveRecord::Migration[6.0]
  def change
    add_column :pets, :password_digest, :string
  end
end
