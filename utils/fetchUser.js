// https://randomuser.me/
const url = "https://randomuser.me/api/"

// récupère les infos de l'utilisateur et les retourne dans un objet
const fetchUser = async () => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP response error: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export default fetchUser
