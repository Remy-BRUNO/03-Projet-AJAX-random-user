import get from "./utils/getElement.js"
import fetchUser from "./utils/fetchUser.js"
import displayUser from "./utils/displayUser.js"

const btnRandom = get(".btn")
const userValue = get(".user-value")

const showUser = async () => {
  userValue.textContent = "loading..."
  // récupére l'utilisateur depuis l'api
  const person = await fetchUser()

  displayUser(person)
  // affiche l'utilisateur
}

btnRandom.addEventListener("click", showUser)

window.addEventListener("DOMContentLoaded", showUser)
