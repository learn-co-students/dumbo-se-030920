Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/toys', to: 'toys#index'
  delete '/toys/:id', to: 'toys#destroy'
  post '/toys', to: 'toys#create'
  patch '/toys/:id', to: 'toys#update'
end
