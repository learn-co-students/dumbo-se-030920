require_relative '../config/environment'

interface = Interface.new()
interface.welcome
user_instance = interface.choose_login_or_register

until user_instance
  # Checks to see if there is actually a user instance
  # and will run the interface.choose_login_or_register method until there is a user
  user_instance = interface.choose_login_or_register
end

interface.user = user_instance

interface.main_menu

puts "hello world"
