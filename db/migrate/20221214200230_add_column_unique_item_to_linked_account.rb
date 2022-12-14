class AddColumnUniqueItemToLinkedAccount < ActiveRecord::Migration[7.0]
  def change
    add_column :linked_accounts, :unique_item, :string
  end
end
