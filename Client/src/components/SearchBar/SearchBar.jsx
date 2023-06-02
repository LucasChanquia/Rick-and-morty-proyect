import s from './SearchBar.module.css'
import { useState } from 'react';



const SearchBar = ({onSearch}) => {

   const [id, setId] = useState('');


   const handleChange = (event) => {
      setId(event.target.value) //even.target.value es el imput del value. El value hace referencia a lo que se escriba en el input.
   }


   return (
      <div className={s.context}>

         <div className={s.rigth}>

            <input className={s.input} placeholder='Ingresa un ID' type='search' onChange={handleChange} value= {id} />

            <button className={s.button} onClick={()=> {onSearch(id)}}>Agregar</button>    {/*el cb es para que el id se pase por props */}
            
         </div>

      </div>
   );
}

export default SearchBar;