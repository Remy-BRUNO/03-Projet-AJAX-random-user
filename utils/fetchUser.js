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
    const { results } = { ...data }
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
    return {
      phone,
      name,
      email,
      number,
      street,
      age,
      password,
      picture,
    }
  } catch (error) {
    console.log(error)
  }
}

export default fetchUser
