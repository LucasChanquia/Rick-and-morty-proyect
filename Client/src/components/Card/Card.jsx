import s from './Card.module.css'
import {Link} from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';




 function Card({id,name,onClose,status,species,gender,origin,image, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id)

      } else  {
         setIsFav(true);
         addFav({id,name,onClose,status,species,gender,origin,image})
      }
   }

    useEffect(() => {
       myFavorites?.forEach((fav) => {
          if (fav.id === id) {
             setIsFav(true);
          }
       }); // eslint-disable-next-line
    }, [myFavorites]);

   return (
      <div className={s.casilla}>

      
          { onClose && <button className={s.boton} onClick={() => onClose(id)}>Close</button> }

         <Link to={`/detail/${id}`} className={s.link}>
            <h2 className={s.name}>{`${name}`}</h2>
         </Link>
         
         <img  className={s.img} src={`${image}`} alt='' /><br />

         {
         isFav ? (
          <button onClick={handleFavorite} className={s.buttonFav}>❤️</button>
         ) : (
          <button onClick={handleFavorite} className={s.buttonFav}>🤍</button>
         )
      }

         <h2 className={s.data}>Estado: {`${status}`}</h2>
         <h2 className={s.data}>Especie: {`${species}`}</h2>
         <h2 className={s.data}>Género: {`${gender}`}</h2>
         <h2 className={s.data}>Origen: {`${origin}`}</h2>

      </div>
   );
}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch)=>{
   return{
      addFav:(character)=>{dispatch(addFav(character))},
      removeFav: (id)=>{dispatch(removeFav(id))}
   }
   


}

export default connect(mapStateToProps,
mapDispatchToProps
) 
(Card);