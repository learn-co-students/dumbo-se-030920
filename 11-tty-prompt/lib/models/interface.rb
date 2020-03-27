class Interface
  attr_accessor :prompt, :user

  def initialize
    @prompt = TTY::Prompt.new
  end

  def welcome
    puts "Hello, welcome to my application! 💪"
  end

  def choose_login_or_register
    # answer = prompt.select("Are you logging in or registering?", [
    #     "Logging in",
    #     "Registering"
    #   ])
    #
    # if answer == "Logging in"
    #   User.logging_someone_in
    # elsif answer == "Registering"
    #   User.create_a_new_user_please
    # end

    answer = prompt.select("Are you logging in or registering?") do |menu|
      menu.choice "Log In", -> { User.logging_someone_in }
      menu.choice "Register", -> { User.create_a_new_user_please }
      menu.choice "Exit", -> { self.goodbye }
    end

  end


  def main_menu
    system "clear"
    puts "Hello, welcome to the app, #{user.username}"
    prompt.select("What would you like to do?") do |menu|
      menu.choice "See all teams", -> { self.see_all_teams }
      menu.choice "Create a team", -> { self.create_a_team }
      menu.choice "Delete a team", -> { self.delete_a_team }
      menu.choice "Log out", -> { self.goodbye }
    end
  end

  def see_all_teams
    system "clear"
    # sleep(5)
    user.display_teams()
    main_menu
  end

  def create_a_team
    # Create a team and associate it to the user
  end

  def delete_a_team
    # From the user's array of teams, choose a team to destroy

  end

  def goodbye
    puts "Goodbye, thanks for playing!"
  end






















end
