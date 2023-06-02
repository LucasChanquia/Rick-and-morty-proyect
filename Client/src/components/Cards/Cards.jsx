import s from './Cards.module.css'
import Card from '../Card/Card';

function Cards({characters, onClose}) {

  return(
    <div className={s.container}>
      <div className={s.cards}>
        {
          characters?.map( ({name,status,species,id,gender,image,origin}) => {
            return (
              <Card
                id = {id} 
                key = {id}
                name = {name}
                status = {status}
                species = {species}
                gender = {gender}
                origin = {origin.name}
                image= {image}
                onClose = {onClose}
              />
            )
          })
        }
      </div>
    </div>
  )
}


export default Cards;