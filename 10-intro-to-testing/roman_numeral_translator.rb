require 'pry'
class RomanNumeralTranslator

  ROMAN_TO_ARABIC = {
    "M" => 1000,
    "D" => 500,
    "C" => 100,
    "L" => 50,
    "X" => 10,
    "V" => 5,
    "I" => 1
  }

  ARABIC_TO_ROMAN = {
    1000 => "M",
    500 => "D",
    100 => "C",
    50 => "L",
    10 => "X",
    5 => "V",
    1 => "I"
  }


  def self.translate(input_number)
    output_roman = ""
    ARABIC_TO_ROMAN.keys.each do |arabic|
      if input_number - arabic >= 0
        number_of_times_arabic_goes_into_input = (input_number / arabic).floor
        input_number = input_number - (arabic * number_of_times_arabic_goes_into_input)
        output_roman += ARABIC_TO_ROMAN[arabic] * number_of_times_arabic_goes_into_input
      end
    end
    output_roman.gsub("IIII", "IV")
  end

end