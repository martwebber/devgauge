class Assessment < ApplicationRecord
    belongs_to :user
    has_many :assessment_questions
    has_many :questions, through: :assessment_questions
   
end
