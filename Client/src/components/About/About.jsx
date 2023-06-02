import style from './About.module.css'

const About = () => {
    return(
        <div className={style.container}>
            <div>
                
                <h1 className={style.h1}> 
                <a href="https://github.com/LucasChanquia" target="_blank" className={style.a}>Create for Lucas Chanquía</a></h1>
                <p className={style.description}>From to Oncativo, Córdoba - Argentina</p>
                <p className={style.description}>Cohorte 38a - Matías Antunez</p>
            </div>
        </div>
    )
}

export default About;