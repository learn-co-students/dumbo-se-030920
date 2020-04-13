class PetsController < ApplicationController
  before_action :set_pet, only: [:show, :edit, :update, :destroy]
  before_action :check_to_see_if_someones_logged_in, only: [:edit, :update, :destroy]

  def index
    @pets = Pet.all
  end


  def new
    @pet = Pet.new
    @errors = flash[:errors]
  end

  def create
    pet = Pet.create(pet_params)
    if pet.valid?
      session[:pet_id] = pet.id
      redirect_to pet
    else
      flash[:errors] = pet.errors.full_messages
      redirect_to new_pet_path
    end
  end


  def loginform
    @errors = flash[:errors]
  end

  def handle_login
    @pet = Pet.find_by(name: params[:username])
    if @pet && @pet.authenticate(params[:password])
      session[:pet_id] = @pet.id
      redirect_to @pet
    else
      flash[:error] = "Invalid username or password"
      redirect_to pet_login_path
    end
  end


  def logout
    session[:pet_id] = nil
    redirect_to pet_login_path
  end


  def show
  end

  def edit
    unless @logged_in_user.id == @pet.id
      redirect_to @logged_in_user
    end
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
    params.require(:pet).permit(:name, :age, :breed, :password)
  end

end
