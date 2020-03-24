class User < ActiveRecord::Base
  has_many :teams

  def self.create_a_new_user_please
    prompt = TTY::Prompt.new
    username_of_the_user = prompt.ask("What do you want your username to be?")
    if User.find_by(username: username_of_the_user)
      puts "Sorry, the name has been taken"
    else
      User.create(username: username_of_the_user)
    end
  end

  def self.logging_someone_in
    prompt = TTY::Prompt.new
    username_of_the_user = prompt.ask("What is your username, person?")
    found_user = User.find_by(username: username_of_the_user)
    if found_user
      return found_user
    else
      puts "Sorry, that name does not exist!"
      sleep(5)
    end
  end

  def display_teams
    team_names = self.teams.map do |team_instance|
      {team_instance.name => team_instance.id }
    end
    # [<#RubyInstance/>, <#RubyInstance/>] =>
    # [{Marvel -> 1}, {JusticeLeague -> 2}]
    # The key of the hash is what the user sees
    # The value of the hash is what gets returned after the select
    
    if team_names.length > 0
      team_id = TTY::Prompt.new.select("Choose a team", team_names)
      found_team = Team.find(team_id)
      found_team.display_heros
    else
      puts "You don't have any teams available! "
      sleep(5)
    end
  end







end
