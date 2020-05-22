Rails.application.routes.draw do
  # HTTPVERB URL, to: 'CONTROLLER_NAME#ACTION_NAME'
  post '/users', to: 'users#create'
  get '/users/stay_logged_in', to: 'users#stay_logged_in'
  post '/users/login', to: 'users#login'



  post '/snacks', to: 'snacks#create'
end
