class EventTypesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
  before_action :set_event_type, only: %i[ show update destroy ]

  # GET /event_types
  def index
    @event_types = EventType.all

    render json: @event_types
  end

  # GET /event_types/1
  def show
    render json: @event_type
  end

  # POST /event_types
  def create
    @event_type = EventType.new(event_type_params)

    if @event_type.save
      render json: @event_type, status: :created, location: @event_type
    else
      render json: @event_type.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /event_types/1
  def update
    if @event_type.update(event_type_params)
      render json: @event_type
    else
      render json: @event_type.errors, status: :unprocessable_entity
    end
  end

  # DELETE /event_types/1
  def destroy
    @event_type.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event_type
      @event_type = EventType.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_type_params
      params.require(:event_type).permit(:name)
    end
end
