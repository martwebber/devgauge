class Question < ApplicationRecord
    validates_presence_of :quiz, :topic_id, :correct_answer
    has_many :assessment_questions
    has_many :assessments , through: :assessment_questions
    has_many :answers, dependent: :destroy
    has_many :student_answers
    belongs_to :topic
end
