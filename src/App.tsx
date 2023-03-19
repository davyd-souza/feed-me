// COMPONENT
import { Header } from './components/Header'

// STYLE
import styles from './App.module.css'

export function App() {
  return (
    <div className={styles.App}>
      <Header />

      <div className={styles.container}>
        <aside>sidebar</aside>
        <main>feed</main>
      </div>
    </div>
  )
}
