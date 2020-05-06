// What is destructuring and why would I want to do it?

  const mod3 = {
    name: "Go Getters && Trend Setters",
    population: 10,
    founded: 030920,
    languages_mastered: ["Ruby", "Rails", "Javascript"]
  }

  const name = mod3.name;
  const population = mod3.population;
  const founded = mod3.founded;
  const languages = mod3.languages

  // console.log(languages)

  // console.log(mod3)



// Could I do it to an array?

  const boroughNames = ["Brooklyn", "Manhattan", "Bronx", "Queens", "Staten Island"];

  const brooklynVar = boroughNames[0]
  const manhattanVar = boroughNames[1]




// Could I do it to the parameters of a function?

  function greet(person) {

    const name = person.name;
    const fullName = person.fullName;

    return `Hello, ${ name }! Your legal name is ${ fullName }.`
  }

  const me = {
    name: "Eric",
    fullName: "Hyeok Jung Kim",
    middleName: "Hank"
  }
