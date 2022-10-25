class CreateAssessments < ActiveRecord::Migration[7.0]
  def change
    create_table :assessments do |t|
     
      t.boolean :status
      t.integer :user_id
      t.integer :duration
      t.boolean :is_actual
      t.datetime :assessment_date
      t.datetime :start_time
      t.string :assessment_type

      t.timestamps
    end
  end
end
