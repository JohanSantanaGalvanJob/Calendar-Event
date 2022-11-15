class ForeignKeys < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :events, :locations
    add_foreign_key :events, :event_types
  end
end
