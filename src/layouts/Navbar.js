import { Link, Route, Routes} from "react-router-dom"
import styles from './Navbar.module.css'
import Home from '../pages/Home'
import Contato from '../pages/Contato'
import NovoProjeto from "../pages/NovoProjeto"
import Sobre from "../pages/Sobre"
import Container from './Container'

function Navbar(){
    return(
        <header>
            <div className={styles.logo}><Link to='/'>Coasts</Link></div>
    
        <ul className={styles.navbar}>
                <li className={styles.itens}>
                    <Link to ='/'>Home</Link>
                </li>
                <li className={styles.itens}>
                    <Link to ='/sobre'>Sobre</Link>
                </li>
                <li className={styles.itens}>
                    <Link to ='/novo_projeto'>Novo Projeto</Link>
                </li>
                 <li className={styles.itens}>
                    <Link to ='/contato'>Contato</Link>
                </li>
        </ul>
         <Container customClass="min-height">
            <Routes>
            
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/contato' element={<Contato />} />
                <Route exact Path='/sobre' element={<Sobre />}/>
                <Route exact path='/novo_projeto' element={<NovoProjeto />}/>
            
            </Routes>
        </Container>
        </header>
    

    )
}
export default  Navbar