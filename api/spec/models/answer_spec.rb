require 'rails_helper'

RSpec.describe Answer, type: :model do
  before(:each) do
    @user = User.create!(first_name:"john",last_name:"doe",username: "doe",email:"doe@gmail.com", password: "pass", user_type:1)
  end
end
