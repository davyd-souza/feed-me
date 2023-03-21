// COMPONENT
import { Avatar } from './Avatar'

// STYLE
import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import '../styles/button.css'
import '../styles/global.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1552160793-cbaf3ebcba72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
        loading='lazy'
        alt=''
      />

      <section className={styles.profile}>
        <Avatar src='https://github.com/davyd-souza.png' alt='Davyd Souza' />
        <div className={styles.profile__info}>
          <p className='user__name'>Davyd Souza</p>
          <span className='user__role'>Web Developer</span>
        </div>
      </section>

      <footer className={styles.footer}>
        <a className='button' href='#' data-variant='outline'>
          <PencilLine />
          Edit profile
        </a>
      </footer>
    </aside>
  )
}
