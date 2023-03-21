// COMPONENT
import { Avatar } from './Avatar'

// STYLE
import styles from './Post.module.css'
import { PaperPlaneRight } from 'phosphor-react'

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.post__header}>
        <div className={styles.post__author}>
          <Avatar
            src='https://media.licdn.com/dms/image/C4D03AQHLtygtGAmNvg/profile-displayphoto-shrink_200_200/0/1661425529298?e=1684368000&v=beta&t=WulqlIOIU-qikqRYGtWJ-KfDbVk3rIFunOdwopRYCco'
            alt='Camilly Silva'
          />
          <div>
            <p className='user__name'>Camilly Silva</p>
            <span className='user__role'>UI/UX Designer</span>
          </div>
        </div>

        <time
          className='date'
          title='19th March at 04:36 PM'
          dateTime='2023-19-03 16:36:10'
        >
          Published 1h ago
        </time>
      </header>

      <section className={styles.content}>
        <p>Fala pessoal 👋</p>

        <p>
          Finalmente finalizei meu novo site/portfólio. Foi um baita desafio
          criar todo o design e codar na unha, mas consegui 💪🏻
        </p>

        <p>
          Acesse e deixe seu feedback 👉{' '}
          <a href='#' className={styles.content__link}>
            devonlane.design
          </a>
        </p>

        <p>
          <a href='#' className={styles.content__link}>
            #uiux
          </a>{' '}
          <a href='#' className={styles.content__link}>
            #userexperience
          </a>
        </p>
      </section>

      <div className='separator' />

      <form className={styles.comment}>
        <label className={styles.comment__label} htmlFor='comment-textarea'>
          Leave your comment
        </label>
        <textarea
          className={styles.comment__textarea}
          id='comment-textarea'
          placeholder='Type your comment...'
        />

        <footer className={styles.comment__footer}>
          <button className='button' data-variant='fill'>
            Comment
            <PaperPlaneRight />
          </button>
        </footer>
      </form>
    </article>
  )
}
