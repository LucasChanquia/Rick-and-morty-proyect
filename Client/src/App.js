import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx'
import './App.css';
import Favorites from './components/Favorites/Favorites.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';



function App() {
   
   const [characters, setCharacters] = useState([]);
   
   const navigate = useNavigate();
   const [access, setAccess] = useState(false)

   useEffect(() => {
      !access && navigate('/');
      // eslint-disable-next-line
   }, [access]);
   

   const login = async (userData) => {

      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         alert('¡User not authorized!')
      }

   }

   const onSearch = async (id) => {

      try {
        
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            } else {
             throw Error()
            }
      } catch (error) {
         alert('There are no characters with this ID');
         }
        
   }
   

   const onClose = (id) => {
      setCharacters(
         characters.filter((char)=>{
            return char.id !== Number(id)
         })
      )
   }

   const location = useLocation();

   
   
   return (
      <div className='App'>

          {location.pathname !== '/' && <Nav />}
          {location.pathname === '/home' && <SearchBar onSearch={onSearch}/>}

          {/* {
         (location.pathname === '/' || location.pathname !=='/home') 
         &&
         <Form login={login} /> 
         // <Nav onSearch={onSearch}/>
       
         }  */}
     
         <Routes>

            <Route path='/' element={<Form login={login} />} />
            
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>

            <Route path='/about' element={<About/>}/>

            <Route path='/detail/:id' element={<Detail/>}/>
            
            <Route path='/favorites' element={<Favorites/>}/> 
            
         </Routes>

      </div>
   );
}



export default App;



// const login = (userData) =>{
   //    if (userData.password === PASSWORD && userData.email === EMAIL){
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }   


   // function onSearch(id) {
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`)
   //    .then(({ data }) => {
   //       if (data.name && character.find(char => char.id === data.id)) {
   //          window.alert('Ya existe un personaje con ese ID) }
   //       else {
   //          
   //       }
   //       setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }