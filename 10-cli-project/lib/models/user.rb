class User < ActiveRecord::Base
  has_many :teams
  # has_many => array, plural
  # belongs_to => instance, singular

  # both macros are class methods that give us instance methods


  def self.create_a_new_user_please
    prompt = TTY::Prompt.new
    username_of_the_user = prompt.ask("What do you want your username to be?")
    if User.find_by(username: username_of_the_user)
      puts "Sorry, the name has been taken"
    end
    User.create(username: username_of_the_user)
  end



  def self.logging_someone_in
    prompt = TTY::Prompt.new
    username_of_the_user = prompt.ask("What is your username, person?")
    found_user = User.find_by(username: username_of_the_user)
    if found_user
      return found_user
    else
      puts "Sorry, that name does not exist!"
    end
  end


end
