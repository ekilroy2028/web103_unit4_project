export const carOptions = {
  color: [
    { name: 'Midnight Black', price: 0 },
    { name: 'Pearl White', price: 500 },
    { name: 'Racing Red', price: 500 },
    { name: 'Ocean Blue', price: 500 },
    { name: 'Matte Gray', price: 1000 }
  ],
  wheels: [
    { name: 'Standard Steel', price: 0 },
    { name: 'Sport Alloy', price: 1500 },
    { name: 'Carbon Fiber', price: 3000 },
    { name: 'Chrome', price: 2500 }
  ],
  interior: [
    { name: 'Cloth', price: 0 },
    { name: 'Leather', price: 2000 },
    { name: 'Suede', price: 3000 },
    { name: 'Carbon Trim', price: 4000 }
  ],
  engine: [
    { name: 'V4 Base', price: 0 },
    { name: 'V6 Sport', price: 5000 },
    { name: 'V8 Performance', price: 10000 },
    { name: 'Electric', price: 15000 }
  ]
}

export const BASE_PRICE = 25000

export const calculatePrice = (color, wheels, interior, engine) => {
  const colorPrice = carOptions.color.find(o => o.name === color)?.price || 0
  const wheelsPrice = carOptions.wheels.find(o => o.name === wheels)?.price || 0
  const interiorPrice = carOptions.interior.find(o => o.name === interior)?.price || 0
  const enginePrice = carOptions.engine.find(o => o.name === engine)?.price || 0
  return BASE_PRICE + colorPrice + wheelsPrice + interiorPrice + enginePrice
}

export const colorMap = {
  'Midnight Black': '#1a1a1a',
  'Pearl White': '#f5f5f5',
  'Racing Red': '#cc0000',
  'Ocean Blue': '#0066cc',
  'Matte Gray': '#808080'
}