import { ReactNode } from "react";
import styles from "../styles/auth.module.css"
import logo from '/logo/horizontal/albgott-logo&name-negative.png'

interface AuthLayoutProps {
  children?: ReactNode;
}

const AuthLayout = ({children}: AuthLayoutProps) => {
  return (
    <main className={styles.main}>
      <img 
          className={styles.logo} 
          src={logo}
          alt='logo'
          width='45%'
      />

      <div className={styles.container}>
        {children}
      </div>
    </main>
  )
}

export default AuthLayout
