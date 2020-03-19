# My Pets - Inheritance

## Key Questions

- [ ] Review how to inherit from a parent class.
- [ ] Review what `super` is doing.
- [ ] Review the look up chain.
- [ ] Investigate `self` in the child and parent classes.
- [ ] Understand how to read test errors

## Key Concepts
- Code smell, removing repeptition 
- DRY

#### RSpec

#### Red-Green-Refactor

#### DRY

## Review Questions

1. How can we get one class to inherit from another?
2. What does `super` do?
3. What is a parent class/superclass?
4. What is the lookup chain and how can we access it?



         User
        /     \
      /         \
    /             \
Administrator     Moderator


          Animal
        /    |   \
      /      |     \
    /        |       \
Fish       Cat       Dog


          Animal
            |  |
           |   |
          |  Mammal
         |    |  \
        /      |   \
      /        |     \
    /          |       \
Fish         Cat       Dog


