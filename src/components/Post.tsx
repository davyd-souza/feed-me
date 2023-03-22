// DEPENDENCY
import dayjs from 'dayjs'

// COMPONENT
import { Avatar } from './Avatar'

// STYLE
import styles from './Post.module.css'
import { PaperPlaneRight } from 'phosphor-react'
import { Comment } from './Comment'

// TYPE
interface PostProps {
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: { type: string; content: string; to?: string }[]
  publishedAt: Date
}

export function Post({ author, content, publishedAt }: PostProps) {
  const publishedDateFormated = dayjs(publishedAt).format(
    'MMMM DD[,] YYYY [at] hh[:]mmA'
  )

  return (
    <article className={styles.post}>
      <header className={styles.post__header}>
        <div className={styles.post__author}>
          <Avatar src={author.avatarUrl} alt={author.name} />
          <div>
            <p className='user__name'>{author.name}</p>
            <span className='user__role'>{author.role}</span>
          </div>
        </div>

        <time
          className='date'
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          Published {dayjs(publishedAt).fromNow()}
        </time>
      </header>

      <section className={styles.content}>
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={index}>
                <a
                  className={styles.content__link}
                  href={line.to ?? '#'}
                  target='_blank'
                >
                  {line.content}
                </a>
              </p>
            )
          }
        })}
      </section>

      <div className='separator' />

      <form className={styles.comment}>
        <p className={styles.comment__label}>Leave your comment</p>
        <textarea
          className={styles.comment__textarea}
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
