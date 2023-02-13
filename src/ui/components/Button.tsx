import styles from "../styles/ui.module.css"

interface ButtonProps {
  children: String
}

const Button = ({children}:ButtonProps) => {
  return(
    <button className={`${styles.button} ${styles.outlined}`}>
      {children}
    </button>
  )
}

export default Button