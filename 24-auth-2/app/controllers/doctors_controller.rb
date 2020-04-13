class DoctorsController < ApplicationController
  before_action :check_to_see_if_someones_logged_in, only: [:show]

  def index
    @doctors = Doctor.all
  end

  def show
    @doctor = Doctor.find(params[:id])
    @all_pets = Pet.all
    @new_appointment = Appointment.new
  end

end
