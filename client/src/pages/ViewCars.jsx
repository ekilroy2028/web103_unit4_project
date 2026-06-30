import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCars, deleteCar } from '../services/CarsAPI'
import { colorMap } from '../utilities/calcPrice'
import { playClank } from '../utilities/sound.js'

const ViewCars = () => {
  const [cars, setCars] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCars = async () => {
      const data = await getCars()
      setCars(data)
    }
    fetchCars()
  }, [])

  const handleDelete = async (id) => {
    playClank()
    await deleteCar(id)
    setCars(cars.filter(car => car.id !== id))
  }

  return (
    <div className='page'>
      <h2>My Custom Cars</h2>
      {cars.length === 0 && <p>No cars yet! Go customize one.</p>}
      <div className='cars-grid'>
        {cars.map(car => (
          <div key={car.id} className='car-card'>
            <div style={{ backgroundColor: colorMap[car.color], width: '100%', height: '100px', borderRadius: '8px', marginBottom: '10px' }} />
            <h3>{car.name}</h3>
            <p>Color: {car.color}</p>
            <p>Wheels: {car.wheels}</p>
            <p>Interior: {car.interior}</p>
            <p>Engine: {car.engine}</p>
            <p><strong>Total: ${Number(car.total_price).toLocaleString()}</strong></p>
            <button onClick={() => { playClank(); navigate(`/customcars/${car.id}`) }}>View</button>
            <button onClick={() => { playClank(); navigate(`/edit/${car.id}`) }}>Edit</button>
            <button onClick={() => handleDelete(car.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewCars