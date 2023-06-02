import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import style from './Detail.module.css'





const Detail = () => {
    const [character, setCharacter] = useState({});

    const {id} = useParams();
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    



    return(
      <div className={style.background}>
         <div className={style.container}>
            <div className={style.card}>
               <h2 className={style.data}>{character?.name}</h2>
               <h2 className={style.data}>STATUS|{character?.status}</h2>
               <h2 className={style.data}>GENDER|{character?.species}</h2>
               <h2 className={style.data}>SPECIE|{character?.gender}</h2>
               <h2 className={style.data}>ORIGIN|{character?.origin?.name}</h2>
            </div>
            <div className={style.card1}>
               <img src={character?.image} alt={character?.name} className={style.img} />
            </div>
         </div>
            <br/>
         <div className={style.button}>
            <Link to='/home'>
            <button className={style.boton} >Regresar</button>
            </Link>
         </div>
      </div>
   )
}

export default Detail;