class CreateStudentAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :student_answers do |t|

      t.timestamps
    end
  end
end
