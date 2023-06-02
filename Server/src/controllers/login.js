const { User } = require ('../DB_connection');

const login = async (req, res) => {

    try {

        const { email, password } = req.query

        if(!email || !password){
            return  res.status(400).send('Faltan datos')
        }
    
        const usuario = await User.findOne({where: {email}})
    
        if(!usuario) {
           return  res.status(404).send("Usuario no encontrado")
        } 

    
        if(usuario.password !== password){
            return res.status(403).send("Contraseña incorrecta")
        }
        return res.status(200).json({access: true});
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {login};
































// const users = require ('../utils/users')

// const login = (req, res) => {
//     const { email, password } = req.query
//     let userFound = users.find(user => user.email === email && user.password === password)
//     userFound ? 
//     res.status(200).json({access: true}) : 
//     res.status(404).json({access: false})
// }

// module.exports = login;