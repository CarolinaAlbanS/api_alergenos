// const mongoose = require("mongoose");
// require("dotenv").config();

// const Estacion = require("../api/models/libros.models");

//  const arrayEstaciones = [{
//     "id":"1",
//     "img": "https://m.media-amazon.com/images/I/91ddMPYKaYL._AC_UF894,1000_QL80_.jpg",
//     "title" : "EL señor de los añillos",
//     "autor": "J.R.R. Tolkien",
//     "year": 1954
// },
// {
//   "id": "2",
//   "img": "https://images.cdn3.buscalibre.com/fit-in/360x360/ba/69/ba694cd6db3336d0fd36e75377399269.jpg",
//   "title": "Romeo y Julieta",
//   "autor": "William Shakespeare",
//   "year": 1597,
//   "genre": "tragedia"
// },
// {
//   "id": "3",
//   "img": "https://m.media-amazon.com/images/I/91a24otHDHL._AC_UF894,1000_QL80_.jpg",
//   "title": "El problema final",
//   "autor": "Arturo Pérez-Reverte",
//   "year": 2023,
//   "genre": "Ficcion, Misterio, Suspense"
// },
// {
//   "id": "4",
//   "img": "https://m.media-amazon.com/images/I/A1lNJP8sC6L._AC_UF894,1000_QL80_.jpg",
//   "title": "Cien años de soledad",
//   "autor": "Gabriel García Márquez",
//   "year": 1967,
//   "genre": "Novela, Ficcion "
// },
// {
//   "id": "5",
//   "img": "https://i.pinimg.com/originals/eb/7f/6c/eb7f6c0351e62c98cb13b9a41be1d52c.jpg",
//   "title": "Un mundo feliz",
//   "autor": "Aldous Huxley",
//   "year": 1932,
//   "genre": "Novela, Ciencia Ficcion"
// },
// {
//   "id": "6",
//   "img": "https://m.media-amazon.com/images/I/71sOSrd+JxL._AC_UF1000,1000_QL80_.jpg",
//   "title": "1984",
//   "autor": "George Orwell",
//   "year": 1940,
//   "genre": "Ciencia Ficcion, Ficcion Politica"
// },
// {
//   "id": "7",
//   "img": "https://m.media-amazon.com/images/I/71vz8bpRQfL._AC_UF894,1000_QL80_.jpg",
//   "title": "El Juego de Ender",
//   "autor": "Orson Scott Card",
//   "year": 1985,
//   "genre": "Ciencia Ficcion"
// },
// {
//   "id": "8",
//   "img": "https://images-na.ssl-images-amazon.com/images/I/51xA-VXhATL.jpg",
//   "title": "Ulises",
//   "autor": "James Joyce",
//   "year": 1920,
//   "genre": "Novela, Ficcion"
// },
// {
//   "id": "9",
//   "img": "https://m.media-amazon.com/images/I/51qhkxcMhvL._AC_UF1000,1000_QL80_.jpg",
//   "title": "Los asesinatos de Crediton",
//   "autor": "Michael Jecks",
//   "year": 2005,
//   "genre": "Novela historica"
// },
// {
//   "id": "10",
//   "img": "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202311/21/00106524063499____2__1200x1200.jpg",
//   "title": "El barracón de las mujeres",
//   "autor": "Fermina Cañaverass",
//   "year": 2024,
//   "genre": "Novela historica"
// },
// {
//   "id": "11",
//   "img": "https://m.media-amazon.com/images/I/81n-hi5Qb+L._AC_UF894,1000_QL80_.jpg",
//   "title": "Un cuento perfecto",
//   "autor": "Elisabet Benavent",
//   "year": 2020,
//   "genre": "Novela Romantica"
// },
// {
//   "id": "12",
//   "img": "https://m.media-amazon.com/images/I/51KADbORuBL.jpg",
//   "title": "El viento conoce mi nombre",
//   "autor": "Isabel Allende",
//   "year": 2023,
//   "genre": "Ficcion literaria"
// },
// {
//   "id": "13",
//   "img": "https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/62545400f840e70253dbda7c_60463c6e926c2413419d2720_9788418395161_Madame20Bovary_CUBIERTA.jpeg",
//   "title": "Madame Bovary",
//   "autor": "Gustave Flaubert",
//   "year": 1856,
//   "genre": "Realismo literario"
// },
// {
//   "id": "14",
//   "img": "https://www.librerias-picasso.com/imagenes/9788416/978841654045.GIF",
//   "title": "En busca del tiempo perdido",
//   "autor": "Marcel Proust",
//   "year": 1914,
//   "genre": "Ficcion"
// },
// {
//   "id": "15",
//   "img": "https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/6254541d8ae4df16d4e69bc8_6034d7d1f3e0f54529b2b1a1_Crimen-y-castigo-fiodor-dostoyevski-editorial-alma.jpeg",
//   "title": "Crimen y castigo",
//   "autor": "Fiódor Dostoyevski",
//   "year": 1866,
//   "genre": "Ficcion filosofica"
// },
// {
//   "id": "16",
//   "img": "https://m.media-amazon.com/images/I/71AVK5VIAzL._AC_UF1000,1000_QL80_.jpg",
//   "title": "El Principito",
//   "autor": "Antoine de Saint-Exupéry",
//   "year": 1943,
//   "genre": "Literatura infantil, Fabula"
// },{
//     "id": "17",
//     "img":"https://imagessl3.casadellibro.com/a/l/s7/63/9788483468463.webp",
//     "title" : "Gomorra",
//     "autor": "Roberto Saviano",
//     "year": 2008,
//     "genre": "No ficcion"
// },
// {
//     "id": "18",
//     "img":"https://images.cdn2.buscalibre.com/fit-in/360x360/73/b6/73b6fd96c31d26e2b6a3531808c1188c.jpg",
//     "title" :"Don Quijote de la Mancha",
//     "autor": "Miguel de Cervantes",
//     "year": 1605,
//     "genre": "Novela, Parodia, Satira, Farsa"
// },
// {
//     "id": "19",
//     "img":"https://m.media-amazon.com/images/I/51JnEATmObL._SY445_SX342_.jpg",
//     "title": "El Niño con el Pijama a Rayas",
//     "autor": "John Boyne",
//     "year": 2006,
//     "genre": "Drama Historico"
// },
// {
//     "id": "20",
//     "img":"https://m.media-amazon.com/images/I/71iB30yACKL._SY466_.jpg",
//     "title": "Arsene Lupin",
//     "autor": "Maurice Leblanc",
//     "year": 1864,
//     "genre": "Ficcion, Misterio, Suspense"
// },
// {
//     "id": "21",
//     "img":"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201712/15/00106523156963____2__640x640.jpg",
//     "title": "Asesinato en el Orient Express",
//     "autor": "Agatha Christie",
//     "year": 1920,
//     "genre": "Novela Misterio, Ficcion, Criminal"
// },
// {
//     "id": "22",
//     "img":"https://imagessl0.casadellibro.com/a/l/s7/10/9788467033410.webp",
//     "title": "Tres Sombreros de Copa",
//     "autor": "Miguel Mihura",
//     "year": 1952,
//     "genre": "Drama"
// },
// {
//     "id": "23",
//     "img":"https://imagessl7.casadellibro.com/a/l/s7/37/9788437606637.webp",
//     "title": "Macbeth",
//     "autor": "William Shakespeare",
//     "year": 1606,
//     "genre": "Tragedia, Drama"
// },
// {
//     "id": "24",
//     "img":"https://imagessl8.casadellibro.com/a/l/s7/78/9788416029778.webp",
//     "title": "Nunca te Pares",
//     "autor": "Phil Knight",
//     "year": 2016,
//     "genre": "Biografia, Autobiografia, Memorias"
// },
// {
//     "id": "25",
//     "img":"https://imagessl0.casadellibro.com/a/l/s7/30/9788401030130.webp",
//     "title": "La Armadura de la Luz",
//     "autor": "Ken Follet",
//     "year": 2023,
//     "genre": "Nobela Belica, Ficcion"
// },
// {
//     "id": "26",
//     "img":"https://imagessl1.casadellibro.com/a/l/s7/21/9788467055221.webp",
//     "title": "Hamlet",
//     "autor": "William Shakespeare",
//     "year": 1603,
//     "genre": "Drama, Tragedia"
// },
// {
//     "id": "27",
//     "img":"https://m.media-amazon.com/images/I/71T-tUJSKbL._SL1360_.jpg",
//     "title": "Los Tres Mostequeros",
//     "autor": "Añejandro Dumas",
//     "year": 1844,
//     "genre": "Novela de Aventuras, Ficcion, Novela Historica"
// },
// {
//     "id":"28",
//     "img":"https://imagessl2.casadellibro.com/a/l/s7/62/9788467043662.webp",
//     "title": "Frankestein",
//     "autor": "Mary Shelley",
//     "year": 1818,
//     "genre": "Ficcion Gotica, Ciencia Ficcion, Horror"
// },
// {
//     "id": "29",
//     "img":"https://imagessl2.casadellibro.com/a/l/s7/82/9788415618782.webp",
//     "title": "Orgullo y Prejuicio",
//     "autor": "Jane Austen",
//     "year": 1813,
//     "genre": "Novela Rosa, Ficcion, Satira"
// },
// {
//     "id": "30",
//     "img":"https://imagessl4.casadellibro.com/a/l/s7/04/9788408181804.webp",
//     "title": "Cumbres Borrascosas",
//     "autor": "Emily Bronte",
//     "year": 1847,
//     "genre": "Novela de Ficcion, Tragedia"
// },
// {
//     "id": "31",
//     "img":"https://imagessl1.casadellibro.com/a/l/s7/21/9788408137221.webp",
//     "title": "Moby Dick",
//     "autor": "Herman Neville",
//     "year": 1851,
//     "genre": "Nobela Epica, Aventuras, Ficcion Nautica"
// },
// {
//     "id": "32",
//     "img":"https://imagessl5.casadellibro.com/a/l/s7/75/9788408195375.webp",
//     "title": "Guerra y Paz",
//     "autor": "Leon Tolstoi",
//     "year": 1868,
//     "genre": "Novela Historica, Nobela Belica, Novela Rosa, Ficcion Filosofica"
// },
// {
//     "id": "33",
//     "img":"https://imagessl6.casadellibro.com/a/l/s7/36/9788408216636.webp",
//     "title": "Mujercitas",
//     "autor": "Lousa May Alcott",
//     "year": 1868,
//     "genre": "Literatura Infantil, Comedia"
// },
// {
//     "id": "34",
//     "img":"https://imagessl1.casadellibro.com/a/l/s7/81/9788415618881.webp",
//     "title": "Ana Karenina",
//     "autor": "Leon Tolstoi",
//     "year": 1878,
//     "genre": "Novela Ficcion, Realismo Literario"
// },
// {
//     "id": "35",
//     "img":"https://imagessl2.casadellibro.com/a/l/s7/42/9788467070842.webp",
//     "title": "El Retrato de Dorian Gray",
//     "autor": "Oscar Wilde",
//     "year": 1890,
//     "genre": "Ficcion Gotica, Ficcion Filosofica"
// },
// {
//     "id": "36",
//     "img":"https://imagessl5.casadellibro.com/a/l/s7/85/9788418395185.webp",
//     "title": "El Gran Gatsby",
//     "autor": "Francis Scott Fitzgerald",
//     "year": 1925,
//     "genre": "Novela Ficcion, Tragedia"
// }
//   ];

// const generarEstacion = () => {
//   return {
//     estacion: faker.address.city(),
//     estado: faker.random.arrayElement(['Abierta', 'Cerrada']),
//     km_abiertos: faker.datatype.number({ min: 0, max: 100 }),
//     km_estacion: faker.datatype.number({ min: 0, max: 100 }),
//     nieveEnCm: faker.datatype.number({ min: 0, max: 300 }),
//     meteo: {
//       temperatura: faker.datatype.number({ min: -10, max: 10 }),
//       viento: faker.datatype.number({ min: 0, max: 30 }),
//       condiciones: faker.random.arrayElement(['Despejado', 'Lluvia', 'Nieve']),
//       pronostico: faker.lorem.sentence()
//     }
//   };
// };

// const arrayEstaciones = Array.from({ length: 3 }, generarEstacion);

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(async () => {
//     const allEstacions = await Estacion.find();
//     if (allEstacions.length > 0) {
//       await Estacion.collection.drop();
//       console.log("Estacions ereased");
//     }
//   })
//   .catch((error) => console.log("error borrando"))
//   .then(async () => {
//     const estacionsMap = arrayEstaciones.map((estacion) => new Estacion(estacion));
//     await Estacion.insertMany(estacionsMap);
//     console.log("estaciones insertadas");
//   })
//   .catch((error) => console.log(error))
//   .finally(() => mongoose.disconnect());

// console.log("hola soy semilla");
