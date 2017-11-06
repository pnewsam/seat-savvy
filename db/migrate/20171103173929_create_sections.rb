class CreateSections < ActiveRecord::Migration[5.1]
  def change
    create_table :sections do |t|
      t.string :name, null: false
      t.jsonb :seat_assignments, null: false, default: {}
      t.integer :teacher_id, null: false

      t.timestamps
    end
  end
end