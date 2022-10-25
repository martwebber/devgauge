class StudentAnswerSerializer < ActiveModel::Serializer
  attributes :id, :question_id, :answer_id
end
