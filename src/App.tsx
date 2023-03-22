// LIB
import './lib/dayjs'

// COMPONENT
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

// STYLE
import styles from './App.module.css'

export function App() {
  return (
    <div className={styles.App}>
      <Header />

      <div className={styles.container}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}
