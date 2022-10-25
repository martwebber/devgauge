class ApplicationController < ActionController::API
    # JWT_SECRET = Rails.application.secrets.secret_key_base
        JWT_SECRET='duh'
    def app_response(status_code: 200, message: "Success", body: nil, serializer: nil)
        if serializer
            render json: { 
                status: status_code, 
                message: message, 
                body: ActiveModelSerializers::SerializableResource.new(body, serializer: serializer) 
            },status: status_code
        else
            render json: { 
                status: status_code, 
                message: message, 
                body: body 
            },status: status_code
        end
    end

    def encode_data(data)
        #data[:exp] = 24.hours.from_now.to_i
        #data[:exp] = 60
        JWT.encode(data, JWT_SECRET, "HS512")
    end

    def decode_data
        token = request.headers["token"]
        if token
            begin
                JWT.decode(token, key: JWT_SECRET, verify: true, options: { algorithm:  'HS512'})
            rescue => error
                error
            end
        end
    end

    def authorize_user
        jwt_data = decode_data
        app_response(body: jwt_data)
        if jwt_data
            User.find(jwt_data[0]["user_id"])
        else
            unauthorized
        end
    end

    def authorize_tm
        jwt_data = decode_data
        if jwt_data
            User.find(jwt_data[0]["user_id"]).where(jwt_data[0]["user_type"] != "student")
        else
            unauthorized(student: false)
        end
    end

    def authorize_admin
        # jwt_data = decode_data
        # unauthorized(student: false) unless !!jwt_data && User.find(jwt_data[0]["user_id"]) && jwt_data[0]["user_type"] = "admin"
        jwt_data = decode_data
        if jwt_data
            User.find(jwt_data[0]["user_id"]).where(jwt_data[0]["user_type"] == "admin")
        else
            unauthorized(student: false)
        end
    end


    def user_id
        jwt_data = decode_data
        jwt_data[0]["user_id"]
    end

    def unauthorized(student: true)
        app_response(status_code: 401, message: student ? "You are unauthorized to view this page" : "You cannot perform that action")
    end
end
 