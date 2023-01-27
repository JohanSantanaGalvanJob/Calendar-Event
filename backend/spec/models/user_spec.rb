require 'rails_helper'

RSpec.describe User, type: :model do
  it "name must be >=5 characters" do
    user = FactoryBot.create(:user)
    expect(user.first_name.length).to be >=6
  end
end
