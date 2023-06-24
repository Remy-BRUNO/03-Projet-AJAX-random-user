// supprime la classe active pour chaque items
export default (items) => {
  items.btns.forEach((element) => {
    if (element.dataset.label !== items.btn.dataset.label) {
      element.classList.remove("active")
    } else {
      element.classList.add("active")
    }
  })
}
