// STYLE
import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import '../styles/button.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1552160793-cbaf3ebcba72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
        loading='lazy'
        alt=''
      />

      <div className={styles.profile}>
        <img
          className={styles.profile__img}
          src='https://github.com/davyd-souza.png'
          alt='Davyd Souza'
        />

        <p className={styles.profile__name}>Davyd Souza</p>
        <span className={styles.profile__role}>Web Developer</span>
      </div>

      <footer className={styles.footer}>
        <a className='button' href='#' data-variant='outline'>
          <PencilLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
