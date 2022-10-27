class CreateAssessmentQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :assessment_questions do |t|
      t.references :assessment , foreign_key: true, null: false
      t.references :question , foreign_key: true, null: false

      t.timestamps
    end
  end
end
