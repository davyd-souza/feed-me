// COMPONENT
import { Header } from './components/Header'

import styles from './App.module.css'

export function App() {
  return (
    <div className='App'>
      <Header />

      <div className={styles.container}>
        <aside>sidebar</aside>
        <main>feed</main>
      </div>
    </div>
  )
}
