class AddLocationToEvents < ActiveRecord::Migration[7.0]
  def change
    add_reference :events, :location_id
    add_reference :events, :event_type_id
  end
end
