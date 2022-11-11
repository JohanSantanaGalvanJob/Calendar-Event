class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.date :date
      t.string :starting_hour
      t.string :finished_hour
      t.string :url

      t.timestamps
    end
  end
end
