class ChartController < ApplicationController
    skip_before_action :authenticate_user!, only: [:index,:show,:chart]
    before_action :set_event, only: %i[ show update destroy ]

    def chart
        # Establish a connection to the PostgreSQL database
        conn = PG.connect(dbname: 'backend', user: 'postgres', password: 'yuho54zx1', host: 'localhost')
        # Execute the SQL query
        @data = conn.exec("SELECT * FROM get_event_count_by_location_name()")
        # Close the connection
        conn.close
        # Store the query results in variables
        @locationName = @data.map { |r| r["name"] }
        @repetition = @data.map { |r| r["count"] }
    
        # Make the data available as an endpoint
        render json: { locationName: @locationName, repetition: @repetition }
      end


    end
