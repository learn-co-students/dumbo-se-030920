class AppointmentsController < ApplicationController


  def new
    @appointment = Appointment.new
  end

  def create
    # byebug
    @appointment = Appointment.create(appointment_params_helper_method)
    # redirect_to pet_path(@appointment.pet.id)
    redirect_to @appointment.pet
  end


  private

  def appointment_params_helper_method
    params.require(:appointment).permit(:time, :doctor_id, :pet_id)
  end

end
