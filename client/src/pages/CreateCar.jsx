import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createCar } from '../services/CarsAPI'
import { carOptions, calculatePrice } from '../utilities/calcPrice'
import { validateCar } from '../utilities/validation'

const CreateCar = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [color, setColor] = useState(carOptions.color[0].name)
  const [wheels, setWheels] = useState(carOptions.wheels[0].name)
  const [interior, setInterior] = useState(carOptions.interior[0].name)
  const [engine, setEngine] = useState(carOptions.engine[0].name)
  const [error, setError] = useState(null)

  const totalPrice = calculatePrice(color, wheels, interior, engine)

  const handleSubmit = async () => {
    const validationError = validateCar(name, color, wheels, interior, engine)
    if (validationError) {
      setError(validationError)
      return
    }
    await createCar({ name, color, wheels, interior, engine, total_price: totalPrice })
    navigate('/customcars')
  }

  const colorMap = {
    'Midnight Black': '#1a1a1a',
    'Pearl White': '#f5f5f5',
    'Racing Red': '#cc0000',
    'Ocean Blue': '#0066cc',
    'Matte Gray': '#808080'
  }

  return (
    <div className='page'>
      <h2>Customize Your Car</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ backgroundColor: colorMap[color], width: '300px', height: '150px', borderRadius: '12px', margin: '20px auto', transition: 'background-color 0.5s' }} />

      <label>Car Name</label>
      <input value={name} onChange={e => setName(e.target.value)} placeholder='My Custom Car' />

      <label>Color</label>
      <select value={color} onChange={e => setColor(e.target.value)}>
        {carOptions.color.map(o => (
          <option key={o.name} value={o.name}>{o.name} (+${o.price})</option>
        ))}
      </select>

      <label>Wheels</label>
      <select value={wheels} onChange={e => setWheels(e.target.value)}>
        {carOptions.wheels.map(o => (
          <option key={o.name} value={o.name}>{o.name} (+${o.price})</option>
        ))}
      </select>

      <label>Interior</label>
      <select value={interior} onChange={e => setInterior(e.target.value)}>
        {carOptions.interior.map(o => (
          <option key={o.name} value={o.name}>{o.name} (+${o.price})</option>
        ))}
      </select>

      <label>Engine</label>
      <select value={engine} onChange={e => setEngine(e.target.value)}>
        {carOptions.engine.map(o => (
          <option key={o.name} value={o.name}>{o.name} (+${o.price})</option>
        ))}
      </select>

      <h3>Total Price: ${totalPrice.toLocaleString()}</h3>
      <button onClick={handleSubmit}>Save My Car</button>
    </div>
  )
}

export default CreateCar