class DoctorsController < ApplicationController

  def index
    @doctors = Doctor.all
  end

  def show
    # number of page views remaining should go down
    session[:views_remaining] = session[:views_remaining] - 1

    @doctor = Doctor.find(params[:id])
    @all_pets = Pet.all
    @new_appointment = Appointment.new
  end

end
