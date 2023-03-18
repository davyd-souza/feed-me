// STYLE
import styles from './Header.module.css'

// ASSET
import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt='Logo' />
      <span className={styles.logoName}>
        <h2 className={styles.logoTitle}>Feed Me</h2>
        <p>with posts</p>
      </span>
    </header>
  )
}
