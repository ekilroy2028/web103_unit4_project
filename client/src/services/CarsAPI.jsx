const BASE_URL = 'http://localhost:3000/api/cars'

export const getCars = async () => {
  try {
    const response = await fetch(BASE_URL)
    if (!response.ok) throw new Error('Failed to fetch cars')
    return response.json()
  } catch (err) {
    console.error(err)
    return []
  }
}

export const getCar = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`)
    if (!response.ok) throw new Error('Failed to fetch car')
    return response.json()
  } catch (err) {
    console.error(err)
    return null
  }
}

export const createCar = async (car) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car)
    })
    if (!response.ok) throw new Error('Failed to create car')
    return response.json()
  } catch (err) {
    console.error(err)
    return null
  }
}

export const updateCar = async (id, car) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car)
    })
    if (!response.ok) throw new Error('Failed to update car')
    return response.json()
  } catch (err) {
    console.error(err)
    return null
  }
}

export const deleteCar = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok) throw new Error('Failed to delete car')
    return response.json()
  } catch (err) {
    console.error(err)
    return null
  }
}