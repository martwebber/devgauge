# frozen_string_literal: true

class StudentAnswerSerializer < ActiveModel::Serializer
  attributes :id, :question_id, :answer_id, :user_id, :assessment_id, :scores
end
