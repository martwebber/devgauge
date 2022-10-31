# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Topic, type: :model do
  before(:each) do
    @topic = Topic.create(topic_content: 'devops')
  end

  it 'can create a topic created successfully with valid data' do
    expect(Topic.all.count).to eq(1)
  end

  describe 'validations' do
    it 'is valid if topic content is set' do
      @topic.topic_content = nil
      expect(@topic).to_not be_valid
    end

    it { should have_many(:questions) }
  end
end
