class Interface
  attr_accessor :prompt, :user

  def initialize
    @prompt = TTY::Prompt.new
  end

  def welcome
    puts "Hello, welcome to my application! 💪"
  end

  def choose_login_or_register
    answer = prompt.select("Are you logging in or registering?", [
        "Logging in",
        "Registering"
      ])

    if answer == "Logging in"
      User.logging_someone_in
    elsif answer == "Registering"
      User.create_a_new_user_please
    end

  end


  def main_menu
    puts "Hello, welcome to the app, #{user.username}"
    puts "You have #{user.teams.count} teams"
  end



end
