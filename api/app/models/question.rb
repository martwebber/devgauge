class Question < ApplicationRecord
    has_many :answers
    has_many :student_answers, through: :answers
end
