# frozen_string_literal: true
class Question < ApplicationRecord
  validates_presence_of :quiz, :correct_answer, :topic_id, :assessment_id
  belongs_to :assessment
  has_many :answers, dependent: :destroy
  has_many :student_answers
  belongs_to :topic
end
