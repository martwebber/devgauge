require 'rails_helper'

RSpec.describe User, type: :model do
  before(:each) do
    @user = User.create!(first_name:"john",last_name:"doe",username: "doe",email:"doe@gmail.com", password: "pass", user_type:1)
  end

  it "can create a user created successfully with valid data" do
    expect(User.all.count).to eq(1)
  end

  describe "validations" do

  it 'is valid if fist name is set' do
      @user.first_name = nil
      expect(@user).to_not be_valid
   end

   it 'is valid if last name is set' do
    @user.last_name = nil
    expect(@user).to_not be_valid
 end

 it 'is valid if username is set' do
  @user.username = nil
  expect(@user).to_not be_valid
end

it 'is valid if email is set' do
  @user.email = nil
  expect(@user).to_not be_valid
end

it 'is valid if password is set' do
  @user.password = nil
  expect(@user).to_not be_valid
end

it 'is valid if user type is set' do
  @user.user_type = nil
  expect(@user).to_not be_valid
end
    it { is_expected.to validate_uniqueness_of(:username) }
    it { is_expected.to validate_uniqueness_of(:email) }
  end


end