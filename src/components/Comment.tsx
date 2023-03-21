// COMPONENT
import { Avatar } from './Avatar'

// STYLE
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import '../styles/global.css'

export function Comment() {
  return (
    <article className={styles.comment}>
      <Avatar
        src='https://github.com/davyd-souza.png'
        alt='Davyd Souza'
        outline={false}
      />

      <section className={styles.comment__container}>
        <div className={styles.comment__content}>
          <header className={styles.comment__header}>
            <div className={styles.comment__info}>
              <p className='user__name' data-size='sm'>
                Davyd Souza
              </p>
              <time
                className='date'
                data-size='sm'
                title='19th March at 05:06 PM'
                dateTime='2023-19-03 17:06:10'
              >
                Published 30min ago
              </time>
            </div>

            <button className='button btn-icon' data-color='danger'>
              <Trash />
            </button>
          </header>

          <p>Muito bom Camilly, parabéns!! 👏👏</p>
        </div>

        <footer className={styles.comment__footer}>
          <button className='button btn-icon' data-color='primary'>
            <ThumbsUp />
            20
          </button>
        </footer>
      </section>
    </article>
  )
}
