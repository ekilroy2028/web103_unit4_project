import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createCar } from '../services/CarsAPI'
import { carOptions, calculatePrice, colorMap } from '../utilities/calcPrice'
import { validateCar } from '../utilities/validation'
import { playClank, playHorn } from '../utilities/sound.js'

const CreateCar = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [color, setColor] = useState(carOptions.color[0].name)
  const [wheels, setWheels] = useState(carOptions.wheels[0].name)
  const [interior, setInterior] = useState(carOptions.interior[0].name)
  const [engine, setEngine] = useState(carOptions.engine[0].name)
  const [error, setError] = useState(null)

  const totalPrice = calculatePrice(color, wheels, interior, engine)

  const isWheelsDisabled = (wheelName) => {
    if (engine === 'Electric' && wheelName === 'Carbon Fiber') return true
    return false
  }

  const isEngineDisabled = (engineName) => {
    if (wheels === 'Carbon Fiber' && engineName === 'Electric') return true
    return false
  }

  const handleWheelsChange = (e) => {
    playClank()
    const newWheels = e.target.value
    setWheels(newWheels)
    if (newWheels === 'Carbon Fiber' && engine === 'Electric') {
      setEngine(carOptions.engine[0].name)
    }
  }

  const handleEngineChange = (e) => {
    playClank()
    const newEngine = e.target.value
    setEngine(newEngine)
    if (newEngine === 'Electric' && wheels === 'Carbon Fiber') {
      setWheels(carOptions.wheels[0].name)
    }
  }

  const handleSubmit = async () => {
    const validationError = validateCar(name, color, wheels, interior, engine)
    if (validationError) {
      setError(validationError)
      return
    }
    playHorn()
    await createCar({ name, color, wheels, interior, engine, total_price: totalPrice })
    navigate('/customcars')
  }

  return (
    <div className='page'>
      <h2>Customize Your Car</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ backgroundColor: colorMap[color], width: '300px', height: '150px', borderRadius: '12px', margin: '20px auto', transition: 'background-color 0.5s' }} />

      <label>Car Name</label>
      <input value={name} onChange={e => setName(e.target.value)} placeholder='My Custom Car' />

      <label>Color</label>
      <select value={color} onChange={e => { playClank(); setColor(e.target.value) }}>
        {carOptions.color.map(o => (
          <option key={o.name} value={o.name}>{o.name} (+${o.price})</option>
        ))}
      </select>

      <label>Wheels</label>
      <select value={wheels} onChange={handleWheelsChange}>
        {carOptions.wheels.map(o => (
          <option key={o.name} value={o.name} disabled={isWheelsDisabled(o.name)}>
            {o.name} (+${o.price}){isWheelsDisabled(o.name) ? ' ⚠️ incompatible' : ''}
          </option>
        ))}
      </select>

      <label>Interior</label>
      <select value={interior} onChange={e => { playClank(); setInterior(e.target.value) }}>
        {carOptions.interior.map(o => (
          <option key={o.name} value={o.name}>{o.name} (+${o.price})</option>
        ))}
      </select>

      <label>Engine</label>
      <select value={engine} onChange={handleEngineChange}>
        {carOptions.engine.map(o => (
          <option key={o.name} value={o.name} disabled={isEngineDisabled(o.name)}>
            {o.name} (+${o.price}){isEngineDisabled(o.name) ? ' ⚠️ incompatible' : ''}
          </option>
        ))}
      </select>

      <h3>Total Price: ${totalPrice.toLocaleString()}</h3>
      <button onClick={handleSubmit}>Save My Car</button>
    </div>
  )
}

export default CreateCar