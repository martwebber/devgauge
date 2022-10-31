# frozen_string_literal: true

class CreateAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :answers do |t|
      t.string :answer_content
      t.references :question, foreign_key: true, null: false

      t.timestamps
    end
  end
end
