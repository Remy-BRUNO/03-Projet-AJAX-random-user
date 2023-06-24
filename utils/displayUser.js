import get from "./getElement.js"
import removeActive from "./removeActive.js"

const userPict = get(".user-img")
const userTiltle = get(".user-title")
const userValue = get(".user-value")
const btns = document.querySelectorAll(".icon")

// affiche les infos de l'utilisateur
const displayUser = (person) => {
  userPict.src = person.picture
  userTiltle.textContent = "My name is"
  userValue.textContent = person.name

  btns.forEach((btn) => {
    const label = btn.dataset.label
    // remise a zero des actives aprés random btn
    btn.classList.remove("active")
    if (label === "name") {
      btn.classList.add("active")
    }
    // selection des user values
    btn.addEventListener("click", () => {
      removeActive({ btns, btn })
      userTiltle.textContent = `My ${label} is`
      userValue.textContent = person[label]
    })
  })
}
export default displayUser
// si je fait un tableau de label
