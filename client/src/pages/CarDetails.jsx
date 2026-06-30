import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCar, deleteCar } from '../services/CarsAPI'
import { colorMap } from '../utilities/calcPrice'
import { playClank } from '../utilities/sound.js'

const CarDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState(null)

  useEffect(() => {
    const fetchCar = async () => {
      const data = await getCar(id)
      setCar(data)
    }
    fetchCar()
  }, [id])

  const handleDelete = async () => {
    playClank()
    await deleteCar(id)
    navigate('/customcars')
  }

  if (!car) return <p>Loading...</p>

  return (
    <div className='page'>
      <h2>{car.name}</h2>
      <div style={{ backgroundColor: colorMap[car.color], width: '300px', height: '150px', borderRadius: '12px', margin: '20px auto' }} />
      <p>Color: {car.color}</p>
      <p>Wheels: {car.wheels}</p>
      <p>Interior: {car.interior}</p>
      <p>Engine: {car.engine}</p>
      <h3>Total: ${Number(car.total_price).toLocaleString()}</h3>
      <button onClick={() => { playClank(); navigate(`/edit/${car.id}`) }}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => { playClank(); navigate('/customcars') }}>Back</button>
    </div>
  )
}

export default CarDetails