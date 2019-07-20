var faker = require('faker')
function generateAnimals() {
  var animals = []
  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var email = faker.internet.email()
    animals.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "email": email
    })
  }
  return { "animals": animals }
}
module.exports = generateAnimals