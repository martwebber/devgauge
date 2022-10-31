# frozen_string_literal: true
class Topic < ApplicationRecord
  validates_presence_of :topic_content
  has_many :questions
end
