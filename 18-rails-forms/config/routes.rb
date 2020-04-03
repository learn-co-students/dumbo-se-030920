Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :pets

  # HTTPVERB "/URL", to: 'nameOfController#nameOfAction', as: "pathPrefix"
  get "/pets", to: 'pets#index', as: "pets"
  get "/pets/:id", to: "pets#show", as: "pet"





end
