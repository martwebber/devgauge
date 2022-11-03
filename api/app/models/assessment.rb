# frozen_string_literal: true

class Assessment < ApplicationRecord
  validates_presence_of :title, :description, :duration, :assessment_type, :user_id
  belongs_to :user
  has_many :questions, dependent: :destroy
end
