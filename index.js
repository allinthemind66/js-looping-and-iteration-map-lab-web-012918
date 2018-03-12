// Code your solution in this file.
function lowerCaseDrivers(arr){
  return arr.map(name => name.toLowerCase())
}

function nameToAttributes(arr){
  return arr.map(function(name){
    return Object.assign({}, {firstName: name.split(" ")[0], lastName: name.split(" ")[1]})
  })
}

function attributesToPhrase(arr){
  return arr.map(function(person){
    debugger
    return `${person.name} is from ${person.hometown}`
  })
};
