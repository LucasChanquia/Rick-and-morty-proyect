import Card from '../Card/Card'
import { filterCards, orderCards } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import style from './Favorites.module.css'

const Favorites = () => {
    
    const favorites = useSelector((state) => state.myFavorites);

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
        console.log(event.target.value);
    }


    return (
        <div className={style.body}>

            <div className={style.display}>
                <div className={style.select}>
                    <select onChange={handleOrder} className={style.filter}>
                        <option value="" label="Ordenar alfabéticamente"></option>
                        <option value="A">Ascendente</option>
                        <option value="D">Descendente</option>
                    </select> <br />
                </div>
                <div className={style.select}>
                    <select onChange={handleFilter} className={style.filter}>
                        <option value="T" label="Ordenar por género"></option>
                        <option value="T" label="">All Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="unknown">Unknown</option>
                    </select> <br />
                </div>
                {/* <div className={style.select}>
                    <select className={style.filter}>
                        <option value="" label='Otros atributos'></option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div> */}
            </div>
            <div className={style.cards}>
            {
            favorites?.map(fav =>{
                return(
                    <Card
                        key= {fav.id}
                        id= {fav.id}
                        name = {fav.name}
                        species = {fav.species}
                        gender={fav.gender}
                        image={fav.image}
                    />
                )
            })
            }
            </div>
        </div>
    )
}

export default Favorites;