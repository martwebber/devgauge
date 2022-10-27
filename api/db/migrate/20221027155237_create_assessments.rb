class CreateAssessments < ActiveRecord::Migration[7.0]
  def change
    create_table :assessments do |t|
      t.string :title
      t.string :description
      t.references :user , foreign_key: true, null: false

      t.timestamps
    end
  end
end
