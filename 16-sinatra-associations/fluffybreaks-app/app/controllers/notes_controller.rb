class NotesController < ApplicationController

  # New
  get '/notes/new' do
    # model
    @breaks = Break.all.order(:break_time)

    # response
    erb :"notes/new"
  end

  # Show
  get '/notes/:id' do
    # model
    @note = Note.find(params[:id])

    # response (render/redirect)
    erb :"notes/show"
  end

  # Create
  post '/notes' do
    # model
    @note = Note.create(text: params[:text], break_id: params[:break_id])
    
    # response (render/redirect)
    redirect "/breaks/#{@note.break.id}"
  end


end