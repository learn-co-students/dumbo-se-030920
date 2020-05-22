eric = User.create(username: "Eric", password: "abc123")
sylwia = User.create(username: "Sylwia", password: "abc123")

sylwia.snacks.create(name: "Chicken Sandwich")


eric.snacks.create(name: "Chicken Sandwich")
eric.snacks.create(name: "Halal Guys")
