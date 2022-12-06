class MembersController < ApplicationController
before_action :authenticate_user!
    def index
render json: current_user.as_json.merge({ image: url_for(current_user.image) }),status: :ok
end
end