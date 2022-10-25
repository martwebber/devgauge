class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :quiz, :correct_answer
  has_many :answers, serializer: AnswerSerializer
end
