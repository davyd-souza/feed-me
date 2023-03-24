// LIB
import './lib/dayjs'

// COMPONENT
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, IPost } from './components/Post'

// STYLE
import styles from './App.module.css'

const POSTS: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Oi-dante.png',
      name: 'Gustavo Barboza',
      role: 'Front-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      {
        type: 'paragraph',
        content:
          'Finalmente finalizei meu novo site. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪',
      },
      { type: 'paragraph', content: 'Acesse e deixe seu feedback 👇' },
      {
        type: 'link',
        content: 'Bytebank-Alura',
        to: 'https://github.com/Oi-dante/Bytebank-Alura',
      },
    ],
    publishedAt: new Date('2023-03-20 19:02:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/marcelodv.png',
      name: 'Marcelo Santos',
      role: 'Software Developer @IBM',
    },
    content: [
      {
        type: 'paragraph',
        content: 'React é defintivamente a melhor tech que estou usando agora.',
      },
      {
        type: 'paragraph',
        content:
          'Antigamente utilizava Vue, porém depois de alguns dias usando React estou simplesmente apaixonado 🥰',
      },
    ],
    publishedAt: new Date('2023-03-19 03:24:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl:
        'https://media.licdn.com/dms/image/C4D03AQHLtygtGAmNvg/profile-displayphoto-shrink_200_200/0/1661425529298?e=1684368000&v=beta&t=WulqlIOIU-qikqRYGtWJ-KfDbVk3rIFunOdwopRYCco',
      name: 'Camilly Silva',
      role: 'Intern @AB InBev',
    },
    content: [
      {
        type: 'paragraph',
        content:
          'Ter paciência, persistência, e acreditar no seu próprio potencial não é tão fácil, mas de degrau em degrau acabamos conquistando nossos objetivos.',
      },
      {
        type: 'paragraph',
        content: 'Fazer parte da Fatec Campinas é um grande orgulho! 💙',
      },
      {
        type: 'link',
        content: '#fatec',
      },
    ],
    publishedAt: new Date('2022-01-24 13:45:14'),
  },
]

export function App() {
  return (
    <div className={styles.App}>
      <Header />

      <div className={styles.container}>
        <Sidebar />
        <main>
          {POSTS.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  )
}
