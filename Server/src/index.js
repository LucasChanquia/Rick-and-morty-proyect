const server = require('./app')
const { conn } = require('./DB_connection');
const PORT = 3001;


conn.sync({force: false}).then(()=>{
    server.listen(PORT, () => {
        console.log('Server raised in port: ' + PORT);
        });
}) // force en true dropea toda la base de datos. Cuando veiamos que todo iba bien, se pasa a false para que no dropee mas.

// la otra fomra es :

// conn.sync({force: true})

// server.listen(PORT, () => {
//     console.log('Server raised in port: ' + PORT);
//     });

