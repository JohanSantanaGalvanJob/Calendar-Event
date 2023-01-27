
require 'rails_helper'
require 'devise'

RSpec.describe "Event Types Services", type: :request do

  include Devise::Test::IntegrationHelpers
  
  describe "GET /eventTypes" do
    it "works!" do
      get "/event_types"
      expect(response).to have_http_status(201)
    end
  end

  describe "POST /event_types" do
    it "creates a new event_types" do
      user = FactoryBot.create(:user)
      sign_in user
  
      event_type_params = FactoryBot.attributes_for(:event_type)
      post "/event_types", params: { event_type: event_type_params }
  
      expect(response).to have_http_status(201)
      json_response = JSON.parse(response.body)
      expect(json_response["name"]).to eq(event_type_params[:id])
    end
  end

  describe "PUT /event_types" do
    it "updates a new event_types" do
      event_type = FactoryBot.create(:event_type)
      event_type_params = FactoryBot.attributes_for(:event_type)
      put "/event_types/#{event_type.id}", params: { event_type: event_type_params }
  
      expect(response).to have_http_status(200)
      json_response = JSON.parse(response.body)
      expect(json_response["name"]).to eq(event_type_params[:name])
    end
  end

  describe "DELETE /event_types" do
    it "deletes a new event_types" do
      user = FactoryBot.create(:user)
      sign_in user
  
      event_type = FactoryBot.create(:event_type)
      delete "/event_types/#{event_type.id}"
  
      expect(response).to have_http_status(200)
    expect(EventType.find_by(id: event_type.id)).to be_nil
    end
  end
 
end

 