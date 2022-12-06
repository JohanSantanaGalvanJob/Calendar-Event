class Event < ApplicationRecord
    has_many :event_user
    has_one :location
    has_one :event_type
    has_one_attached :image, dependent: :destroy
    validates :title, :description, :date, :starting_hour, :finished_hour, :url, :event_type_id, :location_id, :image, presence: true
    
    
end
