require 'pry'


colors = {
  red: "rojo", 
  blue: "azul", 
  green: "verde", 
  yellow: "amarillo", 
  pink: "rosa" 
}


upcase_colors = colors.map do |english_name_symbol, spanish_name_string|
  # binding.pry
  value.upcase
end

p upcase_colors.to_a