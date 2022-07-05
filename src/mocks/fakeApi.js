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
    img: { telecaster },
    description: 'La Fender Telecaster se basa en más de setenta años de innovación, inspiración y evolución para satisfacer las demandas del músico actual. Nuestro popular mástil Deep " C " ahora tiene bordes de diapasón redondeados, un acabado satinado" Super-Natural "y un talón de mástil recién esculpido para una sensación sumamente cómoda y de fácil acceso al registro superior.'
  },
  {
    id: 2,
    name: 'Gibson LesPaul',
    price: 1268,
    stock: 5,
    img: { lespaul },
    description: 'Esta Les Paul cuenta con pastillas, tono independiente y controles de volumen para cada elemento, lo que produce distintos resultados. El punto fuerte en su sonido es ser distorsionado, denso, contundente, potente y redondo.'
  },
  {
    id: 3,
    name: 'Squier Stratocaster',
    price: 868,
    stock: 5,
    img: { stratocaster },
    description: 'Las nuevas pastillas de bobina simple V-Mod II Stratocaster son más articuladas que nunca y conservan la calidez y el timbre de campana mientras que la pastilla del puente DoubleTap ™ ofrece tonos humbucking contundentes y sonidos calibrados de bobina simple con solo presionar un botón. '
  },
  {
    id: 4,
    name: 'Cort Electroacustica',
    price: 590,
    stock: 0,
    img: { acustica },
    description: 'La tapa de abeto genera un tono brillante y claro, incluso en los registros más agudos.'
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

export const getItem = new Promise((resolve, reject) => {
  let condition = true
  setTimeout(() => {
    if (condition) {
      resolve(products[0])
    } else {
      reject('Bad request')
    }
  }, 2000)
})



