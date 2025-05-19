import { Link, Route, Routes} from "react-router-dom"
import styles from './Navbar.module.css'
import Container from './Container'
import logo from '../img/costs_logo.png'

function Navbar(){
    return(
        <nav className={styles.navbar}>
       <Container >
            <Link to='/'><img src={logo} alt="coasts"/></Link>
    
        <ul className={styles.list}>
                <li className={styles.itens}>
                    <Link to ='/'>Home</Link>
                </li>
                <li className={styles.itens}>
                    <Link to ='/projetos'>Projetos</Link>
                </li>

                <li className={styles.itens}>
                    <Link to ='/empresa'>Empresa</Link>
                </li>
               
                <li className={styles.itens}>
                    <Link to ='/contato'>Contato</Link>
                </li>
        </ul>
         
        </Container>
    </nav>

    )
}
export default  Navbar