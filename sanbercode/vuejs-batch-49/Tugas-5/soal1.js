function arrayToObject(arr) {
  arr.forEach(([firstName, lastName, gender, age], index) => {
    let date = new Date();
    let year = date.getFullYear();

    let person = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      age: age < year ? year - age : "Invalid Birth Year",
    };

    let fullName = person.firstName + person.lastName;

    console.log(`${index + 1}. ${fullName} : `, person);
  });
}

// Driver Code
var people = [
  ["Bruce", "Banner", "male", 1975],
  ["Natasha", "Romanoff", "female"],
];
arrayToObject(people);
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 48
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/

var people2 = [
  ["Tony", "Stark", "male", 1980],
  ["Pepper", "Pots", "female", 2023],
];
arrayToObject(people2);
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 43
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/

// Error case
arrayToObject([]); // ""
