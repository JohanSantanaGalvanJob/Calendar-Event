 class UsersController < ApplicationController

    before_action :set_user, only: %i[ show update destroy ]

# users_controller.rb
    def index
      @users = User.all
      render json: @users.map { |user|
        user.as_json.merge({ image: url_for(user.image) })
      }
    end

    def show
        render json: @users.as_json.merge({ image: url_for(@users.image) })
      end
  
    def destroy
      @users.destroy
    end

    def destroyAll
        @users = User.all
        @users.destroy
        redirect_to users_path, notice: 'All users deleted.'
      end

    def update
        if @users.update(user_params)
          render json: @users.as_json.merge({ image: url_for(@users.image) })
        else
          render json: @users.errors, status: :unprocessable_entity
        end
    end

    def set_user
        @users = User.find(params[:id])
      end

      def user_params
        params.require(:user).permit(:first_name,:last_name,:date_birth,:image,:email,:password)
      end

  end