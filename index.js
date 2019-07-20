// code up mock jason data in db.json
// run json-server --watch db.json in terminal


// OR
// Use Faker to generate mock data; npm install faker

// Create file employees.js;

// var faker = require('faker')
// function generateEmployees() {
//   var employees = []
//   for (var id = 0; id < 50; id++) {
//     var firstName = faker.name.firstName()
//     var lastName = faker.name.lastName()
//     var email = faker.internet.email()
//     employees.push({
//       "id": id,
//       "first_name": firstName,
//       "last_name": lastName,
//       "email": email
//     })
//   }
//   return { "employees": employees }
// }
// module.exports = generateEmployees

// Run
// json-server employees.js --port 8080



// ========================================
// Pattern for Posting Data to Server

const destinationURL = "http://localhost:3000/dogs";

let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  // Data must be converted to a string to be set to server
  body: JSON.stringify(formData)
};

fetch(destinationURL, configurationObject)
  // The server will send back the data send, along with an id
  // Convert the body of response from JSON to a Javascript Object
  .then(response => {
    response.json();
  })
  // After parsing completes, perform the following;
  .then(object => {
    console.log(object);
  })
  .catch(error => {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });


// Does the same as 

// <form action = "http://localhost:3000/dogs" method = "POST">
//   <label> Dog Name: <input type="text" name="dogName" id="dogName" /></label > <br />
//   <label> Dog Breed: <input type="text" name="dogBreed" id="dogBreed" /></label> <br />
//   <input type="submit" name="submit" id="submit" value="Submit" />
// </form >


function submitData(name, email) {

  const formData = {
    name: name,
    email: email
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    // Data must be converted to a string to be set to server
    reqBody: JSON.stringify(formData)
  };

  return fetch('http://localhost:3000/users', configurationObject)
    .then(response => {
      response.json();
    })
    .then(object => {
      console.log(object.id);
      document.querySelector('body').append(object.id);
    })
    .catch(error => {
      alert('Unauthorized Access');
      console.log(error.message);
    });
}
