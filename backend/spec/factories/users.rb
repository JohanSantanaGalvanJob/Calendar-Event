# FactoryBot.define do
#   factory :user do
#     id {777}
#     first_name { "MyString" }
#     last_name { "MyString" }
#     email { "MyStringf@gmail.com" }
#     password { "MyString" }
#     date_birth { "2023-01-12" }
#     role {"user"}
#     created_at  {"2023-01-14T20:07:08.503Z"}
#     updated_at {"2023-01-14T20:07:08.789Z"}

#     trait :with_token do
#       after(:create) do |user|
#         user.jti = 'token'
#       end
#     end

#     trait :with_avatar do
#       after(:build) do |user|
#         user.image.attach(io: File.open(Rails.root.join('spec', 'fixtures', 'images', 'avatar.png')), filename: 'avatar.png')
#       end
#     end
#   end
# end

FactoryBot.define do
  factory :user do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    date_birth { Faker::Date.between(from: 50.years.ago, to: 20.years.ago) }
    email { Faker::Internet.email }
    password { 'password' }
    password_confirmation { 'password' }
    role { :user }

    trait :admin do
      role { :admin }
    end

    trait :with_image do
      after(:build) do |user|
        user.image.attach(io: File.open(Rails.root.join('spec', 'fixtures', 'images', 'avatar.png')), filename: 'avatar.png')
      end
    end

    trait :with_jwt do
      after(:create) do |user|
        user.update(jti: SecureRandom.uuid)
      end
    end

    factory :admin_user, traits: [:admin]
    factory :user_with_image, traits: [:with_image]
    factory :user_with_jwt, traits: [:with_jwt]
  end
end
