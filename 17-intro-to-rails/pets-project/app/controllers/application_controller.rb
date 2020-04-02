require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  get "/" do
    erb :welcome
  end

  get "/pets" do
    @pets = Pet.all
    erb :index
  end

  get "/pets/new" do
    erb :new
  end

  post "/pets" do
    @pet = Pet.create(params)
    redirect ("/pets/#{@pet.id}")
  end

  get "/pets/:id" do
    @pet = Pet.find(params[:id])
    erb :show
  end

  get '/pets/:id/edit' do
    @pet = Pet.find(params[:id])
    erb :edit
  end


end
