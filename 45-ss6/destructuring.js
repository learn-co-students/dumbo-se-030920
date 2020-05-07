// What is destructuring and why would I want to do it?
  // Assigning variables from the keys of POJO
  // const {key1, key2, ...} = theObject

  // Importance in Mod 4: 🔥🔥🔥🔥

  const mod3 = {
    name: "Go Getters && Trend Setters",
    population: 10,
    founded: 030920,
    languages_mastered: ["Ruby", "Rails", "Javascript"],
    class_pet: {
      pet_name: "Dog"
    }
  }

  // const name = mod3.name;
  // let name = mod3.name;

  // const population = mod3.population;
  // const founded = mod3.founded;
  // const languages = mod3.languages_mastered

  let {
    name,
    population,
    founded,
    languages_mastered: languages,
    class_pet: {pet_name}
  } = mod3

  // console.log(pet_name)
  // console.log(mod3)










// Could I do it to an array?

// Importance in Mod 4: 🔥

  const boroughNames = ["Brooklyn", "Manhattan", "Bronx", "Queens", "Staten Island"];

  // const brooklynVar = boroughNames[0]
  // const manhattanVar = boroughNames[1]

  const [brooklynVar, , , queensVar] = boroughNames

  // console.log(brooklynVar);
  // console.log(queensVar);











// Could I do it to the parameters of a function?
// Importance in Mod 4: 🔥🔥

  function greet({name, fullName}) {

    // const name = person.name;
    // const fullName = person.fullName;
    // const {name, fullName} = person

    return `Hello, ${ name }! Your legal name is ${ fullName }.`
  }

  const me = {
    name: "Eric",
    fullName: "Hyeok Jung Kim",
    middleName: "Hank"
  }

  // console.log(greet(me));
