# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Question, type: :model do
  before(:each) do
    topic = Topic.create(topic_content: 'devops')
    @question = Question.create!(quiz: 'Who created rails?', correct_answer: 'David Heinemeier Hansson',
                                 topic_id: topic.id)
  end

  it 'can create a question created successfully with valid data' do
    expect(Question.all.count).to eq(1)
  end

  describe 'validations' do
    it 'has many student answers ' do
      expect(Question.new).to respond_to(:student_answers)
    end

    it 'has many answers ' do
      expect(Question.new).to respond_to(:answers)
    end
    it 'has many assessment questions' do
      expect(Question.new).to respond_to(:assessment_questions)
    end

    it 'is valid if question title is set' do
      @question.quiz = nil
      expect(@question).to_not be_valid
    end

    it 'is valid if question correct answer is set' do
      @question.correct_answer = nil
      expect(@question).to_not be_valid
    end

    it 'is valid if question title is set' do
      @question.topic_id = nil
      expect(@question).to_not be_valid
    end

    it { should belong_to(:topic) }

    it { should have_many(:assessments).through(:assessment_questions) }
  end
end
