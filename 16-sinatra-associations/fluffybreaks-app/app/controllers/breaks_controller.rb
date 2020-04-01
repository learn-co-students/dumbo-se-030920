class BreaksController < ApplicationController

  # Index
  get '/breaks' do
    # model
    @breaks = Break.all

    # render/redirect
    erb :"breaks/index"
  end

  # New
  get '/breaks/new' do
    # model

    # render/redirect
    erb :"breaks/new"
  end

  # Create
  post '/breaks' do
    # model
    @break = Break.create(params)
    
    # render/redirect
    redirect("/breaks/#{@break.id}")
  end

  # Show
  get '/breaks/:id' do
    # model
    @break = Break.find(params[:id])
    # @notes = @break.notes
    
    # render/redirect
    erb(:"breaks/show")
  end

  # Edit
  get '/breaks/:id/edit' do
    # model
    @break = Break.find(params[:id])
    
    # render/redirect
    erb :"breaks/edit"
  end

  # Update
  patch '/breaks/:id' do
    # model
   @break = Break.find(params[:id])
   @break.update(params[:breakInformation])
   
   # render/redirect
   redirect("/breaks/#{@break.id}")
  end

  # Destroy
  delete '/breaks/:id' do
    # model
    @break = Break.find(params[:id])
    @break.destroy
    
    # render/redirect
    redirect "/breaks"
  end

end