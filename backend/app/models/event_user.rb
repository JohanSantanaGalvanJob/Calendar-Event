class EventUser < ApplicationRecord
    has_one :user
    has_one :event
end
