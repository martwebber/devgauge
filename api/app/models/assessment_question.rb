# frozen_string_literal: true

class AssessmentQuestion < ApplicationRecord
  belongs_to :assessment
  belongs_to :question
end
