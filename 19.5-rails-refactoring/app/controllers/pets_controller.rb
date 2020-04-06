class PetsController < ApplicationController
  before_action :set_pet, only: [:show, :edit, :update, :destroy]

  def index
    @pets = Pet.all
  end

  def new
    @pet = Pet.new
  end

  def create
    @pet = Pet.create(pet_params)
    redirect_to @pet
  end

  def show
    @new_appointment = Appointment.new
    @all_doctors = Doctor.all
  end

  def edit
  end

  def update
    @pet.update(pet_params)
    redirect_to @pet
  end


  def destroy
    @pet.destroy
    redirect_to pets_path
  end


  private

  def set_pet
    @pet = Pet.find(params[:id])
  end

  def pet_params
    params.require(:pet).permit(:name, :age, :breed)
  end

end
