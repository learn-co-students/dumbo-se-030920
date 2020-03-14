class VentureCapitalist
    attr_reader :name, :total_worth

    @@all = []
    def initialize(name, total_worth)
        @name = name
        @total_worth = total_worth
        @@all << self
    end

    def self.all 
        @@all
    end

    def self.tres_commas_club
        # self.all.first.total_worth

        self.all.select do |vc|
            vc.total_worth > 1_000_000
        end
    end

    def offer_contract(startup, type, investment)
        # FundingRound.new(self, vc, type, invested)
        # initialize(startup, venture_capitalist, type, investment)
        # binding.pry
        FundingRound.new(startup, self, type, investment)
    end

    def funding_rounds
        FundingRound.all.select do |fr|
            fr.venture_capitalist == self
        end
    end

    def portfolio
        funding_rounds.map do |fr|
            fr.startup
        end.uniq
    end

    def biggest_investment
        funding_rounds.max_by do |fr|
            fr.investment
        end
    end

    def invested(domain_string)
        domain = funding_rounds.select do |fr|
            fr.startup.domain == domain_string
            # binding.pry
        end
        domain.sum do |fr|
            # binding.pry
            fr.investment
        end
    end


end
