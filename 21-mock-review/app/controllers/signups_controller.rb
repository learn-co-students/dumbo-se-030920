class SignupsController < ApplicationController

  def new
    @signup = Signup.new
    @campers = Camper.all
    @activities = Activity.all
  end

  def create
    @signup = Signup.create(signup_params)
    if @signup.valid?
      # redirect_to camper_path(@signup.camper)
      redirect_to @signup.camper
    else
      flash[:messages] = @signup.errors.full_messages
      redirect_to "/signups/new"
    end
  end

  private

  def signup_params
    params.require(:signup).permit(:time, :camper_id, :activity_id)
  end

end
