import {ADD_FAV, REMOVE_FAV,FILTER, ORDER} from './action-types'
import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {

   try {
      const URL = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {
       const { data } = await axios.post(URL, character)
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      };
      // eslint-disable-next-line
   } catch (error)  {
      alert('Cannot add to Favorites')
   }
   
};

// export const addFav = (character) => {
//     return {type: ADD_FAV, payload: character}
// }

export const removeFav = (id) => {

   try {
      const URL = 'http://localhost:3001/rickandmorty/fav/' + id;
      return async (dispatch) => {
         const { data } = await axios.delete(URL)
            return dispatch({
               type: REMOVE_FAV,
               payload: data,
               pepi:id,
         });
      };
   } catch (error) {
      alert('It is not possible to delete this character')
   }
 };

 
export const filterCards = (gender) => {
    return{type: FILTER, payload: gender }
}

export const orderCards = (orden) => {
    return {type: ORDER, payload: orden}
}