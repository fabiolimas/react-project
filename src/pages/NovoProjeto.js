import styles from './NovoProjeto.module.css'
import Form from '../components/projetos/ProjetoForm'

function NovoProjeto(){
    return(
        <div className={styles.novo_projeto_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>

            <Form/>

        </div>
    )
}
export default NovoProjeto