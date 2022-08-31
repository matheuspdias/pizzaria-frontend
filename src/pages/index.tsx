import Image from 'next/image'

import Head from 'next/head'
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/logo.svg'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

export default function() {
  return (
    <>
    <Head>
      <title>Pizzaria - Login</title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="Logo Pizzaria"/>

      <div className={styles.login}>
        <form>
          <Input 
            placeholder='Digite seu email'
            type="text"
          />

          <Input 
            placeholder='Digite sua senha'
            type="password"
          />

          <Button 
            type="submit"
            loading={false}
          >
            Login
          </Button>
        </form>

        <a className={styles.text}>Não possui uma conta? Cadastre-se</a>

      </div>
    </div>
    </>
  )
}

