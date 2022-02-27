import { GetServerSideProps } from 'next'
import { FormEvent, useContext, useState } from 'react'

import { parseCookies } from 'nookies'

import { AuthContextt } from '../contexts/AuthContext'
import styles from '../styles/Home.module.scss'
import { withSSRGuest } from '../utils/withSSRGuest'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContextt)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className={styles.loginInput}
        placeholder="Email"
      />

      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className={styles.loginInput}
        placeholder="Senha"
      />

      <button type="submit" className={styles.btnSubmit}>Entrar</button>
    </form>
  )
}
function AuthContext(AuthContext: any): {} {
  throw new Error('Function not implemented.')
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {}
  }
})