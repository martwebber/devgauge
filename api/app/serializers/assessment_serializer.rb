# frozen_string_literal: true

class AssessmentSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :duration, :assessment_type, :user_id
end
