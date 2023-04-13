import React from 'react';
import styles from '../components/Login.module.css';
function Login(){
    return(
        <>
        <div className={`${styles.outercontainer}`}>
        <div className={`${styles.contain}`}>
            <h1>Login</h1>
        <form action="">
            <div>
            <label htmlFor={`${styles.email}`}>Email : </label>
            <input type="email" className={`${styles.email}`} />
            </div>
            <div>
            <label htmlFor={`${styles.pas}`}>Password : </label>
            <input type="password" className={`${styles.pas}`} />
            </div>
            <div className={`${styles.btndiv}`}>
            <button className={`${styles.btn}`}>submit</button>
            </div>
            
        </form>
        </div>
        </div>
       
       
       
        </>
    )
}

export {Login};