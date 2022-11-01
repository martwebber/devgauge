# frozen_string_literal: true

class StudentAnswer < ApplicationRecord
  validates_presence_of :question_id, :answer_id, :user_id, :assessment_id, :scores
  belongs_to :user
  belongs_to :question
  belongs_to :answer
end
