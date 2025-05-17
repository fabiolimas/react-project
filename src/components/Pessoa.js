function Pessoa({imagem, nome, idade}){
    return(
        <div>
            <img src={imagem} alt={nome}/>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
        </div>
    )
}
export default Pessoa;