class RelationshipEventUser < ActiveRecord::Migration[7.0]
  def change

    add_foreign_key "event_users", "events"
    add_foreign_key "event_users", "users"
  end
end
