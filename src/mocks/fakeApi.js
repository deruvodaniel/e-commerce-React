import acustica from '../assets/guitars/acustica.png'
import lespaul from '../assets/guitars/lespaul.png'
import stratocaster from '../assets/guitars/stratocaster.png'
import telecaster from '../assets/guitars/telecaster.png'

const products = [
  {
    id: 1,
    name: 'Fender Telecaster',
    price: 1568,
    stock: 10,
    img: { telecaster }
  },
  {
    id: 2,
    name: 'Gibson LesPaul',
    price: 1268,
    stock: 5,
    img: { lespaul }
  },
  {
    id: 3,
    name: 'Squier Stratocaster',
    price: 868,
    stock: 5,
    img: { stratocaster }
  },
  {
    id: 4,
    name: 'Cort Electroacustica',
    price: 590,
    stock: 0,
    img: { acustica }
  },
  {
    id: 5,
    name: 'Squier Stratocaster',
    price: 868,
    stock: 0,
    img: { stratocaster }
  },
  {
    id: 6,
    name: 'Squier Stratocaster',
    price: 868,
    stock: 15,
    img: { stratocaster }
  },
]

export const getData = new Promise((resolve, reject) => {
  let condition = true
  setTimeout(() => {
    if (condition) {
      resolve(products)
    } else {
      reject('Bad request')
    }
  }, 2000)
})


