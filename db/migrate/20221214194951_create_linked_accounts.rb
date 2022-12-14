class CreateLinkedAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :linked_accounts do |t|
      t.string :institution
      t.string :token
      t.float :balance , :default => 0.00
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
