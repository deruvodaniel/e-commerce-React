const products = [
  {
    id: 1,
    name: 'Fender Telecaster',
    price: 1568,
    stock: 10,
    category: 'guitars',
    img: 'https://i.postimg.cc/Kzy4zMYQ/telecaster.png',
    description: 'La Fender Telecaster se basa en más de setenta años de innovación, inspiración y evolución para satisfacer las demandas del músico actual. Nuestro popular mástil Deep " C " ahora tiene bordes de diapasón redondeados, un acabado satinado" Super-Natural "y un talón de mástil recién esculpido para una sensación sumamente cómoda y de fácil acceso al registro superior.'
  },
  {
    id: 2,
    name: 'Gibson LesPaul',
    price: 1268,
    stock: 5,
    category: 'guitars',
    img: 'https://i.postimg.cc/x1cXFQ7G/lespaul.png',
    description: 'Esta Les Paul cuenta con pastillas, tono independiente y controles de volumen para cada elemento, lo que produce distintos resultados. El punto fuerte en su sonido es ser distorsionado, denso, contundente, potente y redondo.'
  },
  {
    id: 3,
    name: 'Squier Stratocaster',
    price: 868,
    stock: 5,
    category: 'guitars',
    img: 'https://i.postimg.cc/XYmpRhSR/stratocaster.png',
    description: 'Las nuevas pastillas de bobina simple V-Mod II Stratocaster son más articuladas que nunca y conservan la calidez y el timbre de campana mientras que la pastilla del puente DoubleTap ™ ofrece tonos humbucking contundentes y sonidos calibrados de bobina simple con solo presionar un botón. '
  },
  {
    id: 4,
    name: 'Cort Electroacustic',
    price: 590,
    stock: 0,
    category: 'guitars',
    img: 'https://i.postimg.cc/N0X5B4Q5/acustica.png',
    description: 'La tapa de abeto genera un tono brillante y claro, incluso en los registros más agudos.'
  },
  {
    id: 5,
    name: 'Fender Bassman',
    price: 5090,
    stock: 2,
    category: 'amps',
    img: 'https://i.postimg.cc/QCfM0YJn/fender.png',
    description: 'Durante los años 60 y 70, el original Bassman de tweed de 4x10” fue popular entre los guitarristas de rock, country y blues quienes lo redescubren como un amplificador para guitarra de gran sonido y fácil de usar. En los años 90, Fender lanzó la reedición de un amplificador Bassman 59 con gran éxito'
  },
  {
    id: 6,
    name: 'Marshall JCM 800',
    price: 15000,
    stock: 5,
    category: 'amps',
    img: 'https://i.postimg.cc/wvcMsjyz/marshall.png',
    description: 'Classic tube tone from the days of huge guitar The all-valve JCM800 2203 is one of the most highly respected 100W Marshall heads in the companys long history. Evolving from the legendary Plexi head, it was one of the first Marshall amps to feature a master volume control..'
  },
  {
    id: 7,
    name: 'Bafle Bogner 4X12',
    price: 8900,
    stock: 0,
    category: 'amps',
    img: 'https://i.postimg.cc/3N8RjQmv/bogner.png',
    description: 'Ofrezca el epítome del atronador tono rockin 4x12: respuesta de graves gruesos, ricos, gruesos y amaderados. Ya sabes cómo el jugo de naranja concentrado tiene un sabor un poco plano y suave, bueno, nuestro 4x12 es como jugo de naranja recién exprimido con toda esa pulpa masticable'
  },
  {
    id: 8,
    name: 'Orange Cr20rt 20w',
    price: 9900,
    stock: 15,
    category: 'amps',
    img: 'https://i.postimg.cc/j52fhXvS/orange.png',
    description: 'Este equipo combina un sonido limpio muy claro y una distorsion clasica de rock de los 80´s, con la posibilidad de combinar parametros de Gain (Ganancia) con Dirty (distorsion).'
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

