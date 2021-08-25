class AppointmentUpdateJob < ApplicationJob
  queue_as :default

  def perform(appointment)
    ActionCable.server.broadcast 'appointment_channel', id: appointment.id
  end
end
