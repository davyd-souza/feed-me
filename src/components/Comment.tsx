// DEPENDENCY
import { useState } from 'react'

// COMPONENT
import { Avatar } from './Avatar'

// STYLE
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

// TYPE
interface CommentProps {
  content: string
  onDeleteComment: (commentToDelete: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  const handleLikeComment = () => {
    setLikeCount((prevState) => prevState + 1)
  }

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

            <button
              className='button btn-icon'
              data-color='danger'
              onClick={handleDeleteComment}
              title='Delete comment'
            >
              <Trash />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer className={styles.comment__footer}>
          <button
            className='button btn-icon'
            data-color='primary'
            onClick={handleLikeComment}
          >
            <ThumbsUp />
            {likeCount}
          </button>
        </footer>
      </section>
    </article>
  )
}
