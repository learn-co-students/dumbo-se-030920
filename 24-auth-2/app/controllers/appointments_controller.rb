class AppointmentsController < ApplicationController

  before_action :check_to_see_if_someones_logged_in


  def index
    @appointments = @logged_in_user.appointments
  end

  def new
    @appointment = Appointment.new
    @doctors = Doctor.all
  end

  def create
    # @logged_in_user (instance variable) because of my before_action
    # logged_in_user (method) because of inheritance
    @appointment = @logged_in_user.appointments.create(appointment_params_helper_method)
    redirect_to @appointment.pet
  end


  private

  def appointment_params_helper_method
    params.require(:appointment).permit(:time, :doctor_id)
  end

end
