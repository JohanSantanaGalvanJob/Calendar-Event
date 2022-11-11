class AddLocationToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :location, :integer
    add_column :events, :event_type, :integer
  end
end
