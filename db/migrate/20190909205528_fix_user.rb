class FixUser < ActiveRecord::Migration[5.2]
  def change

    remove_column :users, :username, :string
    add_column :users, :display_name, :string

  end
end
