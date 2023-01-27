require 'rails_helper'

RSpec.describe "Users::RegistrationsController", type: :request do
  describe "POST /users" do
    it "works!" do
      post '/users'
      expect(response).to have_http_status(200)
    end
  end

  # describe "POST /users" do
  #   it "creates a new user" do
  #     user_params = FactoryBot.attributes_for(:user)
  #     post "/users", params: { user: user_params }
  
  #     expect(response).to have_http_status(200)
  #     json_response = JSON.parse(response.body)
  #     expect(json_response["first_name"]).to eq(user_params[:first_name])
  #     expect(json_response["last_name"]).to eq(user_params[:last_name])
  #     expect(json_response["email"]).to eq(user_params[:email])
  #     expect(json_response["role"]).to eq("user")
  #   end
  # end

  # describe "POST /users" do
  #   it "creates a new user with image" do
  #     user_params = FactoryBot.attributes_for(:user, :with_image)
  #     post "/users", params: { user: user_params }
  
  #     expect(response).to have_http_status(200)
  #     json_response = JSON.parse(response.body)
  #     user = User.find(json_response["id"]) # find the user just created
  #     expect(user.image.attached?).to eq(true) # check if image is attached to the user
  #     expect(json_response["image_url"]).to eq(url_for(user.image)) # check if image url is returned correctly
  #   end
  # end

end
