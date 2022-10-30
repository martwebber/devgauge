class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
skip_before_action :authorized, only: [:create]


    def create
        user = User.create!(user_params)
        if user.valid?
          token = encode_token({ user_id: user.id })
          render json: { user: UserSerializer.new(user), jwt: token }, status: :created
        else
          render json: { error: 'failed to create user' }, status: :unprocessable_entity
      end
    end


    def index
        users = User.all
        render json: users
    end

    def show 
        jwt_data = decoded_token
        user = User.find(jwt_data[0]["user_id"]) 
        if jwt_data && user
            render json: user
        else
            render json: {errors: ["Not found"]}
        end


        # user = find_user
        # render json: user
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content
    end

    private 

    def user_params
        params.permit(:first_name,:last_name,:username,:email,:user_type,:password)
    end

    def find_user
        User.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
