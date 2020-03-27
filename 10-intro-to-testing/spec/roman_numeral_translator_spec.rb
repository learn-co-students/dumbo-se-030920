require_relative '../roman_numeral_translator'

describe RomanNumeralTranslator do

  describe ".translate" do

    it "can translate 1 to I" do
      expect(RomanNumeralTranslator.translate(1)).to eq("I")
    end

    it "can translate 3 to III" do
      expect(RomanNumeralTranslator.translate(3)).to eq("III")
    end

    it "can translate 4 to IV" do
      expect(RomanNumeralTranslator.translate(4)).to eq("IV")
    end

    it "can translate 5 to V" do
      expect(RomanNumeralTranslator.translate(5)).to eq("V")
    end

    it "can translate 55 to LV" do
      expect(RomanNumeralTranslator.translate(55)).to eq("LV")
    end

    it "can translate 1994 to MCMXCIV" do
      expect(RomanNumeralTranslator.translate(1994)).to eq("MCMXCIV")
    end

  end

end


# result = RomanNumeralTranslator.translate(3)

# #result
# "III"


# Arabic  Roman
# 1       I
# 5       V
# 4       IV
# 15      XV
# 14      XIV
# 50      L
# 100     C
# 500     D
# 1000    M
# 1994    MCMXCIV