// Know map and foreach

array = ["Pikachu", "Raichu", "Pichu", "Snorlax"];

// const editedArray = array.map(item => item + "!")
const editedArray = array.map((item) => ({ item: item }));
// Can be converted into JS objects but it needs to have a parenthesis so that It wont be considered as js function
console.log(editedArray);

//NEW JS FEATURES
// destructuring JS DATAS

// ARRAYS[]
// const userName = ["Ian", "Barrios"]
// const firstName = userName[0]
// const lastName = userName[1]
// SHORTCUT BELLOW, desctructured array
const [firstName, lastName] = ["Ian", "Barrios"];

// OBJECTS{}

// const user = {
//     name: 'Ian',
//     age: 25
// }

// const name = user.name
// const age = user.age
const user = { name: "Ian", age: 25 };
// SHORTCUT BELLOW, desctructure object
const { name, age } = { name: "Ian", age: 25 };


// FUNCTIONS ()
function sayName({fName, lName}){
   console.log(`Hi, my name is ${fName + ' ' + lName}`)
}

sayName({fName: "Ian", lName: "Barrios"})


// SPREAD OPERATOR

// ARRAYS
// Merging 2 or more arrays
const oldHobbies = ["Online games"]
const newHobbies = ["Masturbating"]
const mergedHobbies = [...newHobbies, "Eating", ...oldHobbies]
console.log(mergedHobbies)


// OBJECTS
// Merging 2 or more objects
const extendedUser = {
    isAdmin: true,
    ...user
}
console.log(extendedUser)


// LOOPS
for( hobby of mergedHobbies){
    console.log(hobby)
    console.log(hobby + ' Fuck this life')
}
//Iterate by items

for (hobby in mergedHobbies){
    console.log(hobby)
}
//Iterate by index