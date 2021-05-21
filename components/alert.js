import styles from './alert.module.css';
import cn from 'classnames';
import { useState } from 'react'
export default function Alert({ children, type }) {
      const [alert, setAlert] = useState("success")
  const handleClick = () => {
    alert === "success" ?
      setAlert("error") :
      setAlert("success")
  }
    return (
        <div
            className={cn({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error'
            })}>
            
            <div onClick={handleClick}>
                {type==='succcess' ? <div className={styles.success}>Resultado</div> : <div className={styles.error}>Resultado</div>}
            </div>
            
            {children}
        </div>
    )
}