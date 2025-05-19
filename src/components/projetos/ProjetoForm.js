function ProjetoForm(){
    return(
        <div>
            <form>
                <div>
                        <input type="text"  name="nome" placeholder="Insira o nome do projeto"/>              
                </div>
             
                <div>
                <input  type="number" name="valor" placeholder="Insira o orçamento total"/>
                </div>
                <div>
                <select name="category_id">
                    <option>Selecione a categoria</option>

                    
                    
                    
                </select>
                </div>
            </form>
        </div>
    )
}
export default ProjetoForm