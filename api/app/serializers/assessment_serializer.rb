class AssessmentSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :duration, :assessment_type
  has_many :questions, serializer: QuestionSerializer
end
