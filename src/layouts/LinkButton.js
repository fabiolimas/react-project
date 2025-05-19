
import { Link } from "react-router-dom"
import styles from './LinkButton.module.css'

function LinkButton({texto, to}){
    return(

        <Link to={to} className={styles.button}>
            {texto}
        </Link>
        
    )
}
export default LinkButton