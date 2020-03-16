# Object Relations Code Challenge

Welcome to Silicon Valley! For this assignment, our domain is the startup world! We have three models - `Startup`, `VentureCapitalist`, and `FundingRound`. A `Startup` has many `VentureCapitalist`s through `FundingRound`s.

Startup -<  FR  >-  VentureCapitalist

If you are not sketching out your domain, and thinking about single source of truth,
you are doing it wrong :(

## Topics

- Classes vs Instances
- Variable Scope ( Class, Instance, Local )
- Object Relationships
- Arrays and Array Methods
- Class Methods

## Notes

Your goal is to build out all of the methods listed in the deliverables. Do your best to follow Ruby best practices. For example, use higher-level array methods such as `map`, `select`, and `find` when appropriate in place of `each`

We've provided you with a console that you can use to test your code. To enter a console session, run `ruby tools/console.rb` from the command line. You'll be able to test out the methods that you write here. Take a look at that file to see how you can pre-define variables and create object instances, rather than manually doing it in every single console session.

**Remember!** This is a code challenge without tests. You cannot run `rspec` you cannot run `learn`. You'll need to create your own sample instances for testing purposes. Make sure your associations and methods work in the console before submitting.

## Deliverables

### Basic Class Methods and Properties

#### Build the following methods on the `Startup` class

<!-- - `Startup#name`
  - returns a **string** that is the startup's name -->
<!-- - `Startup#founder`
  - returns a **string** that is the founder's name -->
  <!-- - Once a startup is created, the founder cannot be changed. -->
<!-- - `Startup#domain`
  - returns a **string** that is the startup's domain -->
<!-- - `Startup#pivot`
  - given a string of a **domain** and a string of a **name**, change the domain
    and name of the startup. This is the only public method through which the
    domain should be changed. -->
<!-- - `Startup.all`
  - should return **all** of the startup instances -->
<!-- - `Startup.find_by_founder`
  - given a string of a **founder's name**, returns the **first startup** whose founder's name matches -->
<!-- - `Startup.domains`
  - should return an **array** of all of the different startup domains -->

---

#### Build out the following methods on the `VentureCapitalist` class

<!-- - `VentureCapitalist#name`
  - returns a **string** that is the venture capitalist's name
- `VentureCapitalist#total_worth`
  - returns a **number** that is the total worth of this investor (e.g., think of it as how much money they have) -->
<!-- - `VentureCapitalist.all`
  - returns an array of all venture capitalists -->
<!-- - `VentureCapitalist.tres_commas_club`
  - returns an array of all venture capitalists in the Trés Commas club (they have more then 1,000,000,000 `total_worth`) -->

---

#### Build out the following methods on the `FundingRound` class

<!-- - `FundingRound#startup`
  - returns the startup object for that given funding round
  - Once a funding round is created, I should not be able to change the startup -->
<!-- - `FundingRound#venture_capitalist` -->
  <!-- - returns the venture capitalist object for that given funding round
  - Once a funding round is created, I should not be able to change the venture capitalist -->
<!-- - `FundingRound#type`
  - returns a **string** that is the type of funding round
  - Examples include: Angel, Pre-Seed, Seed, Series A, Series B, Series C, etc. -->
- `FundingRound#investment`
  - returns a **number** that is the amount invested during this funding round
  - This should be a float that is not a negative number.
<!-- - `FundingRound.all`
  - returns all of the funding rounds -->

---

### Associations and Aggregate Methods

#### Startup

<!-- - `Startup#sign_contract` -->
  <!-- - given a **venture capitalist object**, type of investment (as a string), and the amount invested (as a float), creates a new funding round and associates it with that startup and venture capitalist. -->
<!-- - `Startup#num_funding_rounds`
  - Returns the total number of funding rounds that the startup has gotten -->
<!-- - `Startup#total_funds`
  - Returns the total sum of investments that the startup has gotten -->
<!-- - `Startup#investors`
  - Returns a **unique** array of all the venture capitalists that have invested in this company -->
<!-- - `Startup#big_investors` -->
  <!-- - Returns a **unique** array of all the venture capitalists that have invested in this company and are in the Trés Commas club -->

#### VentureCapitalist

- `VentureCapitalist#offer_contract`
  - given a **startup object**, type of investment (as a string), and the amount invested (as a float), creates a new funding round and associates it with that startup and venture capitalist.
<!-- - `VentureCapitalist#funding_rounds`
  - returns an array of all funding rounds for that venture capitalist -->
- `VentureCapitalist#portfolio`
  - Returns a **unique** list of all startups this venture capitalist has funded
- `VentureCapitalist#biggest_investment`
  - returns the largest funding round given by this venture capitalist
- `VentureCapitalist#invested`
  - given a **domain string**, returns the total amount invested in that domain

---
