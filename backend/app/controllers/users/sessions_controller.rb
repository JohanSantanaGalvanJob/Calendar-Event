# frozen_string_literal: true
require 'base64'

class Users::SessionsController < Devise::SessionsController
 respond_to :json

 def create
  email_base64 = params[:user][:email]
  password_base64 = params[:user][:password]
  
  if email_base64.present?
    email = Base64.decode64(email_base64).force_encoding('UTF-8')
    else
    puts "ERROR"
  end

  if password_base64.present?
    password = Base64.decode64(password_base64).force_encoding('UTF-8')
    else
    puts "ERROR"
  end


  puts email
  user = User.find_by(email: email)

  if user && user.valid_password?(password)
    sign_in(:user, user)
    respond_with(user)
  else
    render json: { status: { code: 400, message: "Invalid email or password" } }, status: :bad_request
  end
end

 private

 def respond_with(resource,options={})
  render json: {
    status: { code: 200, message: "user signed in successfully",
    data: current_user.as_json.merge({ image: url_for(current_user.image) })}
  }, status: :ok
  end

    def respond_to_on_destroy
    jwt_payload = JWT.decode(request.headers['Authorization'].split(' ')[1],Rails.application.credentials.fetch(:secret_key_base)).first
    current_user = User.find(jwt_payload['sub'])
    if current_user
      render json: {
        status: 200,
        message: "Signed Out successfully",data: current_user
      }, status: :ok
      else
        render json: {
          status: 401,
          message: "User has no active session"
        }, status: :unauthorized 
    end
  end
end
