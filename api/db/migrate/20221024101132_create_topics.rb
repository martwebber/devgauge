# frozen_string_literal: true

class CreateTopics < ActiveRecord::Migration[7.0]
  def change
    create_table :topics do |t|
      t.string :topic_content

      t.timestamps
    end
  end
end
