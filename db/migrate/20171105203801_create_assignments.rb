class CreateAssignments < ActiveRecord::Migration[5.1]
  def change
    create_table :assignments do |t|
      t.string :name, null: false
      t.integer :section_id, null: false
    
      t.timestamps
    end
  end
end
