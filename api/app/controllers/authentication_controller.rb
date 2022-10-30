class AuthenticationController < ApplicationController
    skip_before_action :authorized, only: [:login]

    def login

        user = User.find_by(email: params[:email])
        #User#authenticate comes from BCrypt
        if user&.authenticate(params[:password])
          # encode token comes from ApplicationController
          token = encode_token({ user_id: user.id})
          render json: { user: UserSerializer.new(user), jwt: token }, status: :accepted
        else
          render json: { message: 'Invalid email or password' }, status: :unauthorized
        end
      
    end
end
