require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  # routes
  get '/' do
    # run this code
    # cat = "Izzy"
    
    # and send this response
    erb(:cat)
  end
  
  get '/french_toast' do
    # and send this response
    # "<marquee>#{"bread " * 99}</marquee>"
    erb(:french_toast)
  end

  # route
  get '/breaks' do
    # get info from the model
    @breaks = Break.all

    # send a response (view)
    erb :index
  end

end
