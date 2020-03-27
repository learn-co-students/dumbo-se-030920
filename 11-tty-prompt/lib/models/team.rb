class Team < ActiveRecord::Base
  belongs_to :user

  has_many :rosters
  has_many :heros, through: :rosters

  def display_heros
    hero_names = self.heros.map do |hero|
      hero.hero_name
    end
    if hero_names.length > 0
      TTY::Prompt.new.select("Here are your heros:", hero_names)
    else
      puts "No heros for this team!"
      sleep(5)
    end
  end


end
