Rails.application.routes.draw do
  # HTTPVERB URL, to: 'CONTROLLER_NAME#ACTION_NAME'
  post '/users', to: 'users#create'
end
