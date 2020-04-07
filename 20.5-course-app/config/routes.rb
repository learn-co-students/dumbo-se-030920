Rails.application.routes.draw do
  get '/students' , to: "students#index", as: "students"
  get '/students/new', to: "students#new", as: "new_student"
  get "/students/:id", to: "students#show", as: "student"
  get "/students/:id/edit", to: "students#edit", as: "edit_student"
  post '/students', to: "students#create"
  patch "students/:id", to: "students#update"
  delete "/students/:id", to: "students#destroy"

  get '/enrollments' , to: "enrollments#index", as: "enrollments"
  get '/enrollments/new', to: "enrollments#new", as: "new_enrollment"
  post 'enrollments', to: "enrollments#create"
  delete "/enrollments/:id", to: "enrollments#destroy"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
