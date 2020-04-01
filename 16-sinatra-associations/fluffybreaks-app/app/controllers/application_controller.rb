require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end


  get '/' do
    erb(:cat)
  end

  get '/french_toast' do
    erb(:french_toast)
  end

end
