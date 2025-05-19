import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import { DiVim } from "react-icons/di"

function Navbar(){
    return(
        <header>
            <div className={styles.logo}>Coasts</div>
    
        <ul className={styles.navbar}>
                <li className={styles.itens}>
                    <Link to ='/'>Home</Link>
                </li>
                 <li className={styles.itens}>
                    <Link to ='/orcamento'>Orçamento</Link>
                </li>
        </ul>

        </header>
    

    )
}
export default  Navbar