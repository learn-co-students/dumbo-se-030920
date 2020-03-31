require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end


  post '/breaks' do
    # binding.pry
    # this action handles the form being submitted
    @break = Break.create(params)
    redirect("/breaks/#{@break.id}")
  end

  # routes
  get '/' do
    erb(:cat)
  end

  get '/breaks/new' do
    # this action gets a form
    erb :new
  end

  get '/breaks/:id' do
    @break = Break.find(params[:id])
    erb(:show)
  end


  get '/french_toast' do
    erb(:french_toast)
  end

  # route
  get '/breaks' do
    @breaks = Break.all
    erb :index
  end

end
