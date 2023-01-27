# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  before_action :configure_permitted_parameters, :only => [:create]

  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name,:last_name,:date_birth,:image,:role])
    end
  
  private 

  def respond_with(resource,options={})
    if resource.persisted?
      render json:{
        status: {code: 200, message: 'Signed Up successfully',data: resource.as_json.merge({ image: url_for(resource.image) })}
      }, status: :ok
    else
      render json: {
        status: {
          message: 'User could not be created successfully', errors: resource.errors.full_messages
        },status: :unprocessable_entity
      }
    end
  end
  
end
