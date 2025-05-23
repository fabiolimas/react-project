import styles from './Home.module.css'
import imagemsvg from '../img/savings.svg'
import LinkButton from '../layouts/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1> Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/novo_projeto" texto="Criar Projeto"/>
            <img src={imagemsvg} alt ="imagem"/>
        </section>
    )
}
export default Home