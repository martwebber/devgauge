# frozen_string_literal: true

require "rails_helper"

RSpec.describe StudentAnswer, type: :model do
  before(:each) do
    user =
      User.create!(
        first_name: "john",
        last_name: "doe",
        username: "doe",
        email: "doe@gmail.com",
        password: "pass",
        user_type: 1
      )
    assessment =
      Assessment.create(
        title: "title",
        description: "desc",
        duration: 50,
        assessment_type: "trial",
        user_id: user.id
      )
    topic = Topic.create(topic_content: "devops")
    question =
      Question.create!(
        quiz: "Who created rails?",
        correct_answer: "David Heinemeier Hansson",
        topic_id: topic.id,
        assessment_id: assessment.id
      )
    answer = Answer.create!(answer_content: "DHH", question_id: question.id)
    @student_answers =
      StudentAnswer.create!(
        user_id: user.id,
        question_id: question.id,
        assessment_id: assessment.id,
        answer_id: answer.id,
        scores:90
      )
  end

  it 'can create student answers successfully with valid data' do
    expect(StudentAnswer.all.count).to eq(1)
  end

  describe 'validations' do
      it 'is valid if question id is set' do
        @student_answers.question_id = nil
        expect(@student_answers).to_not be_valid
      end
      it 'is valid if user id is set' do
        @student_answers.user_id = nil
        expect(@student_answers).to_not be_valid
      end

      it 'is valid if assessment id is set' do
        @student_answers.assessment_id = nil
        expect(@student_answers).to_not be_valid
      end

      it 'is valid if user id is set' do
        @student_answers.answer_id = nil
        expect(@student_answers).to_not be_valid
      end

      it 'is valid if score is set' do
        @student_answers.scores = nil
        expect(@student_answers).to_not be_valid
      end

    it { is_expected.to validate_presence_of(:user_id) }
    it { is_expected.to validate_presence_of(:assessment_id) }
    it { is_expected.to validate_presence_of(:question_id) }
    it { is_expected.to validate_presence_of(:answer_id) }
    it { is_expected.to validate_presence_of(:scores) }
  end

end