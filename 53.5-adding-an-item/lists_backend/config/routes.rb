Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/lists', to: 'lists#index'
  post '/lists', to: 'lists#create'
  patch '/lists/:id', to: 'lists#update'
  delete '/lists/:id', to: 'lists#destroy'

  post '/lists/:list_id/items', to: 'items#create'
end
