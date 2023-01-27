
require 'rails_helper'
require 'devise'

RSpec.describe "Locations Services", type: :request do
  include Devise::Test::IntegrationHelpers

  describe "GET /locations" do
    it "works!" do
      get "/locations"
      expect(response).to have_http_status(200)
    end
  end

  describe "POST /locations" do
    it "creates a new location" do
      user = FactoryBot.create(:user)
      sign_in user
  
      location_params = FactoryBot.attributes_for(:location)
      post "/locations", params: { location: location_params }
  
      expect(response).to have_http_status(201)
      json_response = JSON.parse(response.body)
      expect(json_response["name"]).to eq(location_params[:name])
    end
  end

  describe "PUT /locations" do
    it "updates a new location" do
      user = FactoryBot.create(:user)
      sign_in user
      location = FactoryBot.create(:location)
      location_params = FactoryBot.attributes_for(:location)
      put "/locations/#{location.id}", params: { location: location_params }
  
      expect(response).to have_http_status(200)
      json_response = JSON.parse(response.body)
      expect(json_response["name"]).to eq(location_params[:name])
    end
  end

  describe "DELETE /locations" do
    it "deletes a new location" do
      user = FactoryBot.create(:user)
      sign_in user
  
      location = FactoryBot.create(:location)
      delete "/locations/#{location.id}"
  
      expect(response).to have_http_status(204)
    expect(Location.find_by(id: location.id)).to be_nil
    end
  end

end

 