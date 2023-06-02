

const validation = (userData) =>{

    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regexPassword = /.*\d+.*/;
    const errors = {}; 

    if(!userData.email){
        errors.email= 'Debes ingresar tu email'
    } else if  (!regexEmail.test(userData.email)) {
        errors.email = "Ingresa un email válido";
    }

    if(userData.email.length > 35) {
        errors.name = "Email no puede exceder 35 caracteres";
      }

      
    if (!userData.password) {
        errors.password = "Ingresa un password"
    } else if (!regexPassword.test(userData.password)) {
        errors.password = "Tu contraseña debe tener al menos 1 número"
        } else if (userData.password.length < 6 || userData.password.length > 10 ){
        errors.password = "Tu contraseña debe tener entre 6 y 10 caracteres"
    }
    return errors
    }


export default validation;