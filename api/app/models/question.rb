# frozen_string_literal: true

class Question < ApplicationRecord
   belongs_to :assessment
  
    has_many :answers, dependent: :destroy
    has_many :student_answers
    belongs_to :topic
end
