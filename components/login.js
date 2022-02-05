import { useMoralis } from "react-moralis";

import Image from "next/image";
import icon from'../public/metamask_logo.jpeg';

import styles from '../styles/Login.module.css';

export default function Login() {
    const {authenticate, authError} = useMoralis();
  return (
    <div className={styles.login_container}>
      <div className={styles.login_card}>
        <Image src={icon} alt="logo_icon"/>
        <div className={styles.login_title}>Connect with Metamask</div>
        <div className={styles.login_error}>
          {
            authError && (
              <p>
                {authError.name}
                {authError.message}
              </p>
            )
          }
        </div>
        <button className={styles.login_button} onClick={authenticate}>Login</button>
      </div>
    </div>
  );
}
