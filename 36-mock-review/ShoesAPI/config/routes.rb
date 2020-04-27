Rails.application.routes.draw do

  resources :shoes, only: [:index, :show] do
    resources :reviews, only: [:create]
  end
  
end
