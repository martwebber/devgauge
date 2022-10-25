class AuthenticationController < ApplicationController

    def login
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            data = {
              user_id: user.id,
              user_type: user.user_type
            }
            token = encode_data(data)
            app_response(status_code: 200, message: "Login successful", body: {
                  user: ActiveModelSerializers::SerializableResource.new(user, serializer: UserSerializer),
                  token: token
                })
        else
            app_response(status_code: 401, message: "Invalid username or password")
        end
    end
end
