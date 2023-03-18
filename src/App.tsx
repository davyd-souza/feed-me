// COMPONENT
import { Header } from './components/Header'

export function App() {
  return (
    <div className='App'>
      <Header />

      <div>
        <aside>sidebar</aside>
        <main>feed</main>
      </div>
    </div>
  )
}
