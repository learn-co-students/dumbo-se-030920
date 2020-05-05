Rails.application.routes.draw do
  get '/toyboxes', to: 'toyboxes#index'
  
  # post '/toys', to: 'toys#create'
  # delete '/toys/:id', to: 'toys#destroy'
  # patch /toys/:id, to: 'toys#update'
end
