import styles from './ProjetoForm.module.css'
import Input from  '../form/Input'
import Select from  '../form/Select'
import SubmitButton from '../form/SubmitButton'
import { useEffect, useState } from 'react'


function ProjetoForm({btnText, handleSubmit, projectData}){

    const [categories, setCategories]=useState([])
    const [project, setProject]=useState(projectData || {})

    useEffect(()=>{
        fetch("http://localhost:5000/categories",{
    
        method:"get",
        headers:{
            "Content-Type": "application/json"
        }

         },
     

      )
        .then((resp)=>resp.json())
        .then((data)=>{
        setCategories(data)
        })
    .catch((err)=>console.log(err))

    }, [])    

    const submit=(e)=>{
        e.preventDefault()
        //console.log(project)
        handleSubmit(project)
    }
    function handleChange(e){

        setProject({...project, [e.target.name]: e.target.value})
        console.log(project)
    }

       function handleCategory(e){

        setProject({...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
        
    }

    return(
        <div>
            <form onSubmit={submit} className={styles.form}>
                
                <Input type="text" name="nome" text="Nome do Projeto" placeholder="Insira o nome do Projeto" id="nome" handleOnChange={handleChange} value={project.nome}/>    
               
                 <Input type="number" name="valor" text="Orçamento do Projeto" placeholder="Insira o orçamento total" id="valor" handleOnChange={handleChange} value={project.valor}/>    
              
                <div>
                <Select name="category" text="Selecione a categoria" id="category" options={categories} 
                handleOnChange={handleCategory}
               /> 
                </div>
                <SubmitButton  text={btnText}/>
            </form>
        </div>
    )
}
export default ProjetoForm