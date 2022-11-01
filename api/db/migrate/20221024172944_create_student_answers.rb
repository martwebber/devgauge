# frozen_string_literal: true

class CreateStudentAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :student_answers do |t|
      t.references :question, foreign_key: true, null: false
      t.references :user, foreign_key: true, null: false
      t.references :answer, foreign_key: true, null: false
      t.references :assessment, foreign_key: true, null: false
      t.string :scores

      t.timestamps
    end
  end
end
