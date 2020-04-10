class DoctorsController < ApplicationController

  def index
    @doctors = Doctor.all
  end

  def show
    @doctor = Doctor.find(params[:id])
    @all_pets = Pet.all
    @new_appointment = Appointment.new
  end

end
