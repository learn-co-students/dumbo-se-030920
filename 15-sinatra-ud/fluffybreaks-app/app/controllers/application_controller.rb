require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end


  # Index
  get '/breaks' do
    @breaks = Break.all
    erb :index
  end

  # New
  get '/breaks/new' do
    erb :new
  end

  # Create
  post '/breaks' do
    @break = Break.create(params)
    redirect("/breaks/#{@break.id}")
  end

  # Show
  get '/breaks/:id' do
    @break = Break.find(params[:id])
    erb(:show)
  end

  # Edit
  get '/breaks/:id/edit' do
    @break = Break.find(params[:id])
    erb :edit
  end


  # Update
  patch '/breaks/:id' do

    # Old Hash =>
   #  {
   #  "_method"=>"PATCH",
   #   "break_time"=>"Party Time 97",
   #   "animal_video"=>
   #    "https://www.youtube.com/watch?v=FZ86nhDDmZc",
   #   "length"=>"13",
   #   "category"=>"Good vibes all around",
   #   "id"=>"12"
   # }


   # IDEAL GOAL:
   # {
     # "_method" => "patch",
      # "id": "12",
      # "breakInformation" => {
       # "break_time"=>"Party Time 97",
       #   "animal_video"=>
       #    "https://www.youtube.com/watch?v=FZ86nhDDmZc",
       #   "length"=>"13",
       #   "category"=>"Good vibes all around",
     # }
   # }

   @break = Break.find(params[:id])
   @break.update(params[:breakInformation])
   redirect("/breaks/#{@break.id}")
  end


  # Destroy
  delete '/breaks/:id' do
    # binding.pry
    @break = Break.find(params[:id])
    @break.destroy
    redirect "/breaks"
  end





  get '/' do
    erb(:cat)
  end

  get '/french_toast' do
    erb(:french_toast)
  end


end
