# frozen_string_literal: true

class Answer < ApplicationRecord
  validates_presence_of :answer_content, :question_id
  belongs_to :question
  has_many :student_answers
end
