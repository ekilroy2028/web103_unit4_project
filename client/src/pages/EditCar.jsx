import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCar, updateCar } from '../services/CarsAPI'
import { carOptions, calculatePrice, colorMap } from '../utilities/calcPrice'
import { validateCar } from '../utilities/validation'
import { playClank, playHorn } from '../utilities/sound.js'

const EditCar = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [wheels, setWheels] = useState('')
  const [interior, setInterior] = useState('')
  const [engine, setEngine] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCar = async () => {
      const data = await getCar(id)
      setName(data.name)
      setColor(data.color)
      setWheels(data.wheels)
      setInterior(data.interior)
      setEngine(data.engine)
    }
    fetchCar()
  }, [id])

  const totalPrice = calculatePrice(color, wheels, interior, engine)

  const handleSubmit = async () => {
    const validationError = validateCar(name, color, wheels, interior, engine)
    if (validationError) {
      setError(validationError)
      return
    }
    playHorn()
    await updateCar(id, { name, color, wheels, interior, engine, total_price: totalPrice })
    navigate('/customcars')
  }

  return (
    <div className='page'>
      <h2>Edit Your Car</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ backgroundColor: colorMap[color], width: '300px', height: '150px', borderRadius: '12px', margin: '20px auto', transition: 'background-color 0.5s' }} />

      <label>Car Name</label>
      <input value={name} onChange={e => setName(e.target.value)} />

      <label>Color</label>
      <select value={color} onChange={e => { playClank(); setColor(e.target.value) }}>
        {carOptions.color.map(o => (
          <option key={o.name} value={o.name}>{o.name} (+${o.price})</option>
        ))}
      </select>

      <label>Wheels</label>
      <select value={wheels} onChange={e => { playClank(); setWheels(e.target.value) }}>
        {carOptions.wheels.map(o => (
          <option key={o.name} value={o.name}>{o.name} (+${o.price})</option>
        ))}
      </select>

      <label>Interior</label>
      <select value={interior} onChange={e => { playClank(); setInterior(e.target.value) }}>
        {carOptions.interior.map(o => (
          <option key={o.name} value={o.name}>{o.name} (+${o.price})</option>
        ))}
      </select>

      <label>Engine</label>
      <select value={engine} onChange={e => { playClank(); setEngine(e.target.value) }}>
        {carOptions.engine.map(o => (
          <option key={o.name} value={o.name}>{o.name} (+${o.price})</option>
        ))}
      </select>

      <h3>Total Price: ${totalPrice.toLocaleString()}</h3>
      <button onClick={handleSubmit}>Save Changes</button>
      <button onClick={() => { playClank(); navigate('/customcars') }}>Cancel</button>
    </div>
  )
}

export default EditCar