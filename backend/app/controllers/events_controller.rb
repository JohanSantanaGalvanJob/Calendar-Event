class EventsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index,:show,:chart]
  before_action :set_event, only: %i[ show update destroy ]


  # GET /events
  def index
    @events = Event.all

    render json: @events.map { |event|
      event.as_json.merge({ image: url_for(event.image) })
    }  
  end

  

  # GET /events/1
  def show
    # url = url_for(@image)

    render json: @event.as_json.merge({ image: url_for(@event.image) })
  end

  # POST /events
  def create
    @event = Event.new(event_params)

  
      if @event.save
        render json: @event.as_json.merge({ image: url_for(@event.image) }), status: :created #, location: @event
      else
        render json: @event.errors, status: :unprocessable_entity
      end

  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event.as_json.merge({ image: url_for(@event.image) })
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_params
      params.require(:event).permit(:title, :description, :date, :starting_hour, :finished_hour, :url, :location, :event_type, :location_id, :event_type_id, :image)
    end
end
