import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './action-types'




const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer= (state = initialState, action)=>{

    switch(action.type){

        case ADD_FAV:
          
        return { 
            ...state, 
            myFavorites: action.payload,   
            allCharacters: action.payload 
        };


        // case ADD_FAV: return {
        //     ...state,
        //     myFavorites: [...state.allCharacters, action.payload],
        //     allCharacters: [...state.allCharacters, action.payload]
        // }


        case REMOVE_FAV:
            const filter2 = state.myFavorites.filter((user) => user.id !== action.pepi)
        return { 
            ...state,
            myFavorites: filter2, 
            allCharacters: action.payload 
        };

        case FILTER:

            const allCharactersFiltered = action.payload === "T" ? 
                                          state.allCharacters : 
                                          state.allCharacters.filter(char => char.gender === action.payload);

             return{
                 ...state,
                 myFavorites: allCharactersFiltered
            }

        case ORDER:
           const copiaCharacters = [...state.myFavorites]
           return {
            ...state,
              myFavorites:
              action.payload === 'A' 
              ? copiaCharacters.sort((a, b) => a.id - b.id)
              : copiaCharacters.sort((a, b) => b.id - a.id)
            }

            default: return {...state}
        }  
}

export default reducer;