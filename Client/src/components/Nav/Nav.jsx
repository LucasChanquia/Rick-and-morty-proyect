
import {NavLink} from 'react-router-dom';
import style from './Nav.module.css'


const Nav = ({onSearch}) =>{

    return (
        <div className={style.container}>
            <div className={style.tamaño}>
                <div className={style.box}>
               
                    <NavLink to='/home'>
                    <button className={style.button}>HOME</button>
                    </NavLink>

                    <NavLink to='/favorites'>
                    <button className={style.button}>FAVORITES</button>
                    </NavLink>

                    <NavLink to='/about'>
                    <button className={style.button}>ABOUT</button>
                    </NavLink>

                    <NavLink to='/'>
                    <button className={style.button}>LOGOUT</button>
                    </NavLink>
                </div>
            </div>
            {/* <SearchBar onSearch={onSearch}/>  */}
        </div>
    )
}

export default Nav;