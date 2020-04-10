class PetsController < ApplicationController
  before_action :set_pet, only: [:show, :edit, :update, :destroy]

  def index
    @pets = Pet.all
  end

  # GET /pets/new
  def new
    @pet = Pet.new
    @errors = flash[:errors]
    # render :new
  end

  # POST /pets
  def create
    pet = Pet.create(pet_params)

    # if the pet is valid
    if pet.valid?
      redirect_to pet
    else
      # otherwise give them another chance to fill out the form
      flash[:errors] = pet.errors.full_messages
      redirect_to new_pet_path
    end
  end

  def show
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
