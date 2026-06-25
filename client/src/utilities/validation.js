export const validateCar = (name, color, wheels, interior, engine) => {
  if (!name || !color || !wheels || !interior || !engine) {
    return 'Please fill in all fields.'
  }

  if (engine === 'Electric' && wheels === 'Carbon Fiber') {
    return 'Electric engines are not compatible with Carbon Fiber wheels.'
  }

  return null
}