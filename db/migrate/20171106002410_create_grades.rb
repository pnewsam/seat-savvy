class CreateGrades < ActiveRecord::Migration[5.1]
  def change
    create_table :grades do |t|      
      t.integer :assignment_id, null: false
      t.integer :student_id, null: false
      t.string :value, null: false, default: ""

      t.timestamps
    end
  end
end
