import get from "./utils/getElement.js"
import fetchUser from "./utils/fetchUser.js"
import displayUser from "./utils/displayUser.js"

const btnRandom = get(".btn")
const userValue = get(".user-value")

const showUser = async () => {
  userValue.textContent = "loading..."
  // récupére l'utilisateur depuis l'api
  const person = await fetchUser()
  const { results } = { ...person }
  const {
    phone,
    name: { first, last },
    email,
    location: {
      street: { number, name: way },
    },
    dob: { age },
    login: { password },
    picture: { large: picture },
  } = results[0]
  const name = `${first} ${last}`
  const street = `${number} ${way}`
  displayUser({
    phone,
    name,
    email,
    number,
    street,
    age,
    password,
    picture,
  })
  // affiche l'utilisateur
}

btnRandom.addEventListener("click", showUser)

window.addEventListener("DOMContentLoaded", showUser)
