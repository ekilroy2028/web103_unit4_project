export const validateCar = (name, color, wheels, interior, engine) => {
  if (!name || !color || !wheels || !interior || !engine) {
    return 'Please fill in all fields.'
  }

  // Impossible combo: Electric engine with V8 Performance wheels (just an example)
  if (engine === 'Electric' && wheels === 'Carbon Fiber') {
    return 'Electric engines are not