# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Assessment, type: :model do
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
    @assessment =
      Assessment.create(
        title: 'title',
        description: 'desc',
        duration: 50,
        assessment_type: 'trial',
        user_id: user.id
      )
    end

  it 'can create a assessment created successfully with valid data' do
    expect(Assessment.all.count).to eq(1)
  end

  describe 'validations' do
    it 'is valid if assessment content is set' do
      @assessment.title = nil
      expect(@assessment).to_not be_valid
    end

    it 'is valid if correct answer is set' do
      @assessment.description = nil
      expect(@assessment).to_not be_valid
    end

    it 'is valid if topic id is set' do
      @assessment.duration = nil
      expect(@assessment).to_not be_valid
    end

    it 'is valid if assessment id is set' do
      @assessment.assessment_type = nil
      expect(@assessment).to_not be_valid
    end

    it 'is valid if user id is set' do
      @assessment.user_id = nil
      expect(@assessment).to_not be_valid
    end

    it { should belong_to(:user) }

    it { should have_many(:questions) }
  end
  end