require 'pry'

class Startup
    attr_reader :founder 
    attr_accessor :domain, :name 
    
    @@all = []

    def initialize(name, founder, domain)
        @name = name
        @founder = founder 
        @domain = domain
        # binding.pry
        @@all << self
    end

    def pivot(new_domain, new_name)
        @domain = new_domain
        @name = new_name

        # self.domain = new_domain
        # self.name = new_name
        # binding.pry
    end

    def self.all 
        @@all
    end

    def self.find_by_founder(founder_name_match)
        # access list of all startp instances
        # self.all -> list of startups
        # 
        self.all.find do |startup|
            startup.founder == founder_name_match
        end
    end

    def self.domains
        # access of domains -> self.all
        # domains = self.all.map do |startup|
        #     startup.domain
        # end

        # domains.uniq

        self.all.map do |startup|
            startup.domain
        end.uniq

        # binding.pry
    end

    def sign_contract(vc, type, invested)
        # binding.pry
        # create a funding round
        # initialize(startup, venture_capitalist, type, investment)
        # binding.pry
        FundingRound.new(self, vc, type, invested)
    end

    def num_funding_rounds
        # binding.pry
        # funding rounds -> array of all funding rounds
         myFR = FundingRound.all.select do |fr|
            fr.startup == self
         end
    end

    def total_funds 
        # num_funding_rounds => array of FR
        # 
        # total = 0
        # num_funding_rounds.map do |fr|
        #     total += fr.investment
        # end
        # total
        total = num_funding_rounds.sum do |fr|
            fr.investment
        end
    end

    def investors
        # binding.pry
        # funding rounds -> array
        num_funding_rounds.map do |fr|
            fr.venture_capitalist
        end.uniq
    end

    def big_investors
        # binding.pry
        investors.select do |vc|
            vc.total_worth > 1_000_000
        end
    end
end
