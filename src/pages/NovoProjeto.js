import styles from './NovoProjeto.module.css'
import Form from '../components/projetos/ProjetoForm'
import {useNavigate} from 'react-router-dom'

function NovoProjeto(){

    const history = useNavigate();

    function createPost(project){

        project.cost = 0
        project.services=[]
        

        fetch('http://localhost:5000/projects', {
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(project)
            }).then((resp)=>resp.json())
            .then((data)=>{
            console.log(data)
            history('/projetos', {message: 'Projeto criado com sucesso'})
            
        })
        .catch((err)=>console.log(err))
    }

    return(
        <div className={styles.novo_projeto_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>

            <Form btnText="Criar Projeto" handleSubmit={createPost}/>

        </div>
    )
}
export default NovoProjeto