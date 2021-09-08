import axios from "axios"
import faker from "faker"

const seedDB = async () => {
  let firstName = faker.name.firstName()
  let lastName = faker.name.lastName()
  let photoURL = faker.internet.avatar.schema.sampleResults[0]
  let email = faker.internet.email.schema.sampleResults[0]
  let password = faker.internet.password.schema.sampleResults[0]
  const users = {
    "firstname": firstName,
    "lastname": lastName,
    "photoURL": photoURL,
    "email": email,
    "password": password,
  }
  await axios.post("http://localhost:3001/users", users )
}

for(let i = 0; i<= 20; i++) {
  seedDB()
}