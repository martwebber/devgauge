# frozen_string_literal: true

class ApplicationController < ActionController::API
  before_action :authorized
  def encode_token(payload)
    # should store secret in env variable
    JWT.encode(payload, 'my_s3cr3t')
  end

  def auth_header
    # { Authorization: 'Bearer <token>' }
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      # header: { 'Authorization': 'Bearer <token>' }
      begin
        JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  # def authorize_potential_user_jwt
  #   jwt_data = decoded_token
  #   user = User.find(jwt_data[0]["user_id"])
  #   user1 = user.user_type
  #   unauthorized unless jwt_data  && (user1 == "student")
  # end

  def authorize_assessment
    jwt_data = decoded_token
    user = User.find(jwt_data[0]['user_id'])
    user1 = user.user_type
    unauthorized unless jwt_data && (user1 != 'student')
  end

  def unauthorized
    render json: { errors: ['You cannot perform that action'] }
  end

  def current_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!current_user
  end

  def authorized(student: true)
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end
end
