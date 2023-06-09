const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";



const getCharById = (req, res) => {
    let { id } = req.params

    axios.get(`${URL}${id}`) // ${id}
        .then(pepito => (pepito.data))
        .then(({ id, name, gender, species, origin, image, status }) => {

            if(name){
                let personajes = {
                    id,
                    name,
                    gender,
                    species,
                    origin,
                    image,
                    status
                }
                return res.status(200).json(personajes)
            }
            return res.status(404).send('Not fount')
        }
        ).catch((error) => res.status(500).send(error.message))
}

module.exports = {getCharById}






















// const axios = require ('axios');

//  const getCharById = (res, id) =>{
// axios.get(`https://rickandmortyapi.com/api/character/${id}`) // ${id}
// .then(pepito => (pepito.data))
// .then(({id, name, gender, species, origin, image, status})=>{
//     let personajes = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status
//     }
//      res.writeHead(200, {'Content-type': 'application/json'}).end(JSON.stringify(personajes))
// })

// .catch((err)=> {
//      res.writeHead(500, {'Content-type': 'text/plain'}).end(err.message)
// })
// }

// module.exports =  getCharById;