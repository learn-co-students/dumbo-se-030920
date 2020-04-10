Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :pets, only: [:index, :new, :create, :edit, :update, :destroy, :show]

  get "/doctors", to: 'doctors#index', as: "doctors" # index
  get "/doctors/:id", to: 'doctors#show', as: "doctor" # index
  # HTTPVERB "/URL", to: 'nameOfController#nameOfAction', as: "pathPrefix"

  get "/pets", to: 'pets#index', as: "pets" # index
  get '/pets/new', to: 'pets#new', as: 'new_pet' #new
  post '/pets', to: 'pets#create' #create
  get "/pets/:id", to: "pets#show", as: "pet" #show
  get "/pets/:id/edit", to: 'pets#edit', as: "edit_pet" #edit
  patch "/pets/:id", to: 'pets#update' #update
  delete "/pets/:id", to: 'pets#destroy' #destroy

  get '/appointments', to: 'appointments#index', as: 'appointments'
  get '/appointments/new', to: 'appointments#new', as: 'new_appointment'
  post '/appointments', to: 'appointments#create'
  # resources :appointments, only: [:new, :index, :create]

  patch "/sessions/reset_views", to: "sessions#reset_views"

end
