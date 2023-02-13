import styles from "../styles/ui.module.css"

interface Props {
  type?: string
  label?: string
  name: string
  placeholder: string
  errors: string[]
  onChange?: () => any
  onBlur?: () => any
}


const Input = ({type,onChange,onBlur,name,placeholder,label,errors}:Props) => {

  const hasErrors = () => {
    return errors.length > 0;
  }

  return (
    <div className={styles.inputWrapper}>
      {
        label &&
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      }

      <input className={`${styles.input} ${hasErrors() ? styles.input_error : ""}`}  type={type} onChange={onChange} onBlur={onBlur} name={name} id={name} placeholder={placeholder} />

      <div className={styles.errorsWrapper}>
        {
            errors.map(
                error => <p key={error}>{error}</p>
            )
        }
      </div>
    </div>
  
  )


}


Input.defaultProps = {
  type: "text",
  errors: []
} as Partial<Props>

export default Input
