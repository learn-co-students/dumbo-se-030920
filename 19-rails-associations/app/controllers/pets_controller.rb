class PetsController < ApplicationController

  def index
    @pets = Pet.all
    # render :index
  end

  def new
    @pet = Pet.new
  end

  def create
    # params =>  {pet: {name, age, breed}}
    # params.require(:pet) => {name, age, breed} PERMITTED FALSE b/c Rails wills it so
    # params.require(:pet).permit(:name, :age, :breed) => {name, age, breed} PERMITTED TRUE b/c we want to use it for mass-assignment

    @pet = Pet.create(
      params.require(:pet).permit(:name, :age, :breed)
    )

    redirect_to @pet
    # redirect_to pet_path(@pet)
    # redirect_to pet_path(@pet.id)
    # redirect_to "/pets/#{@pet.id}"
  end


  def show
    @pet = Pet.find(params[:id])
  end


  def edit
    @pet = Pet.find(params[:id])
  end


  def update
    @pet = Pet.find(params[:id])
    @pet.update(
      params.require(:pet).permit(:name, :age, :breed)
    )
    redirect_to @pet
    # redirect_to pet_path(@pet)
    # redirect_to pet_path(@pet.id)
    # redirect_to "/pets/#{@pet.id}"
  end


  def destroy
    # byebug
    @pet = Pet.find(params[:id])
    @pet.destroy
    redirect_to pets_path
  end

end
