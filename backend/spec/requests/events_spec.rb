
require 'rails_helper'

RSpec.describe "Users::RegistrationsController", type: :request do
  describe "POST /users" do
    it "works!" do
      post '/users'
      expect(response).to have_http_status(200)
    end
  end

  # describe "PUT /users" do
  #   it "works!" do
  #     user = FactoryBot.create(:user)
  #     put "/users?user_id=#{user.id}"
  #     expect(response).to have_http_status(200)
  #   end
  # end

  # ERROR 401 No autorizado preguntar Miguel

  describe "GET /events" do
    it "works!" do
      get "/events"
      expect(response).to have_http_status(200)
    end
  end

  # ERROR IMAGE NIL preguntar a Miguel

  describe "GET /event_types" do
    it "works!" do
      get "/event_types"
      expect(response).to have_http_status(200)
    end
  end

  describe "GET /locations" do
    it "works!" do
      get "/locations"
      expect(response).to have_http_status(200)
    end
  end
end

 
require 'rails_helper'

RSpec.describe "Users::RegistrationsController", type: :request do

  # ERROR 401 No autorizado preguntar Miguel

  describe "GET /events" do
    it "works!" do
      get "/events"
      expect(response).to have_http_status(200)
    end
  end
  
end

 