class ForeignKeys < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :location_id, :integer
    add_column :events, :event_type_id, :integer
    add_foreign_key :events, :locations
    add_foreign_key :events, :event_types
  end
end
