class Event < ApplicationRecord
    has_many :event_user
    has_one :location
    has_one :event_type
end
