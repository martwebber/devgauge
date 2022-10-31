# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Question, type: :model do
  before(:each) do
    user =
      User.create!(
        first_name: 'john',
        last_name: 'doe',
        username: 'doe',
        email: 'doe@gmail.com',
        password: 'pass',
        user_type: 1
      )
    assessment =
      Assessment.create(
        title: 'title',
        description: 'desc',
        duration: 50,
        assessment_type: 'trial',
        user_id: user.id
      )
    topic = Topic.create(topic_content: 'devops')
    @question =
      Question.create!(
        quiz: 'Who created rails?',
        correct_answer: 'David Heinemeier Hansson',
        topic_id: topic.id,
        assessment_id: assessment.id
      )
  end

  it 'can create a question created successfully with valid data' do
    expect(Question.all.count).to eq(1)
  end

  describe 'validations' do
    it 'is valid if question content is set' do
      @question.quiz = nil
      expect(@question).to_not be_valid
    end

    it 'is valid if correct answer is set' do
      @question.correct_answer = nil
      expect(@question).to_not be_valid
    end

    it 'is valid if topic id is set' do
      @question.topic_id = nil
      expect(@question).to_not be_valid
    end

    it 'is valid if assessment id is set' do
      @question.assessment_id = nil
      expect(@question).to_not be_valid
    end

    it { should belong_to(:topic) }

    it { should have_many(:answers) }
  end
end
