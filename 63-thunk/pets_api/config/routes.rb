Rails.application.routes.draw do
  get '/users/stay_logged_in', to: 'users#stay_logged_in'
  post '/users/login', to: 'users#login'
  resources :appointments
  resources :users, only: [:create]
  resources :pets, only: [:index, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
