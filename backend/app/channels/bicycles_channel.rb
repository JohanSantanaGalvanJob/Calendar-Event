class BicyclesChannel < ApplicationCable::Channel
    def subscribed
      stream_from "orbea_fun_club"
    end
  
    def unsubscribed
      # Any cleanup needed when channel is unsubscribed
    end
  end
  