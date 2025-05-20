
import styles from './Select.module.css'
function Select({type, text, name, handleOnChange, options,value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} value={value} onChange={handleOnChange}>
                <option value={value || ''} >Selecione uma Opção</option>
                {options.map((option)=>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}

            </select>
            

        </div>
    )
}
export default Select