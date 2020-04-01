require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  # Index
  get '/breaks' do
    # model
    @breaks = Break.all

    # render/redirect
    erb :index
  end

  # New
  get '/breaks/new' do
    # model

    # render/redirect
    erb :new
  end

  # Create
  post '/breaks' do
    # model
    @break = Break.create(params)
    
    # render/redirect
    redirect("/breaks/#{@break.id}")
  end

  # Show
  get '/breaks/:id' do
    # model
    @break = Break.find(params[:id])
    
    # render/redirect
    erb(:show)
  end

  # Edit
  get '/breaks/:id/edit' do
    # model
    @break = Break.find(params[:id])
    
    # render/redirect
    erb :edit
  end

  # Update
  patch '/breaks/:id' do
    # model
   @break = Break.find(params[:id])
   @break.update(params[:breakInformation])
   
   # render/redirect
   redirect("/breaks/#{@break.id}")
  end

  # Destroy
  delete '/breaks/:id' do
    # model
    @break = Break.find(params[:id])
    @break.destroy
    
    # render/redirect
    redirect "/breaks"
  end

  get '/' do
    erb(:cat)
  end

  get '/french_toast' do
    erb(:french_toast)
  end

end
