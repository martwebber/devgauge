# frozen_string_literal: true

class TopicSerializer < ActiveModel::Serializer
  attributes :id, :topic_content
end
