class AddLocationToEvents < ActiveRecord::Migration[7.0]
  def change
    add_reference :events, :location
    add_reference :events, :event_type 
  end
end
