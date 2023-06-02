const { User } = require ('../DB_connection');

const postUser = async (req, res) => {
    
    try {

        const { email, password } = req.body

    if(!email || !password){
        res.status(400).json('Faltan datos')
    } else {

        const Usuario = await User.findOrCreate({where: {email , password}})
        return res.status(200).json(Usuario)
    } 
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}  

module.exports = {postUser};
    

