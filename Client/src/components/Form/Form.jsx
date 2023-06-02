import { useState } from 'react';
import validation from '../Validation/Validation';
import style from './Form.module.css'


const Form = ({login}) => {


    const [userData, setUserData] = useState({
        email: '',
        password: '',
     });

     const [errors, setErrors] = useState({
        // email: '',
        // password: '',
     });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSumbmit = (event) =>{
        event.preventDefault();
        login(userData);
    }
    
    return (
        <div className={style.container}>
            <div className={style.position}>
            <div className={style.card}>
        <form>
            <label className={style.data}>EMAIL</label> <br />
                <input className={style.form} type="text" placeholder='Email' value={userData.email} onChange={handleChange} name='email' /> <br />
            {errors.email && <p className={style.p}>{errors.email}</p>}
            
            <label className={style.data}>PASSWORD</label> <br />
                <input className={style.form} type="password" placeholder='********' value={userData.password} onChange={handleChange} name='password' /> <br />
            {errors.password && <p className={style.p} >{errors.password}</p>}
            <button className={style.button} onClick={handleSumbmit}>Log in</button>
        </form>
        </div>
            </div>
        </div>
    )
}

export default Form;