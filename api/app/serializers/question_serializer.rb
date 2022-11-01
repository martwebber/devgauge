# frozen_string_literal: true

class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :quiz, :correct_answer, :topic_id, :assessment_id
  has_many :answers, serializer: AnswerSerializer
end
