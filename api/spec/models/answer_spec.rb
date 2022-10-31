# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Answer,type: :model do
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
    question =
      Question.create!(
        quiz: 'Who created rails?',
        correct_answer: 'David Heinemeier Hansson',
        topic_id: topic.id,
        assessment_id: assessment.id
      )
    @answer = Answer.create!(answer_content: 'DHH', question_id: question.id)
  end

  it 'can create an answer successfully with valid data' do
    expect(Answer.all.count).to eq(1)
  end

  describe 'validations' do
    it 'is valid if answer content is set' do
      @answer.answer_content = nil
      expect(@answer).to_not be_valid
    end

    it 'is valid if question id is set' do
      @answer.question_id = nil
      expect(@answer).to_not be_valid
    end

    it { should belong_to(:question) }

    it { should have_many(:student_answers) }
  end
end
