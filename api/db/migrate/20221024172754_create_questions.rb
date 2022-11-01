# frozen_string_literal: true

class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :quiz
      t.references :topic, foreign_key: true, null: false
      t.references :assessment, foreign_key: true, null: false
      t.string :correct_answer

      t.timestamps
    end
  end
end
