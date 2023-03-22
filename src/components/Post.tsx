// DEPENDENCY
import { ChangeEvent, FormEvent, useState } from 'react'
import dayjs from 'dayjs'

// COMPONENT
import { Avatar } from './Avatar'
import { Comment } from './Comment'

// STYLE
import styles from './Post.module.css'
import { PaperPlaneRight } from 'phosphor-react'

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
  const [comments, setComments] = useState(['Post tooop! 🚀'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormated = dayjs(publishedAt).format(
    'MMMM DD[,] YYYY [at] hh[:]mmA'
  )

  const handleNewComment = (e: FormEvent) => {
    e.preventDefault()

    setComments((prevState) => [newCommentText, ...prevState])
    setNewCommentText('')
  }

  const handleCommentTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(e.target.value as string)
  }

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
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
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

      <form onSubmit={handleNewComment} className={styles.comment}>
        <p className={styles.comment__label}>Leave your comment</p>

        <textarea
          className={styles.comment__textarea}
          placeholder='Type your comment...'
          onChange={handleCommentTextChange}
          value={newCommentText}
        />

        <footer className={styles.comment__footer}>
          <button className='button' data-variant='fill'>
            Comment
            <PaperPlaneRight />
          </button>
        </footer>
      </form>

      <section className={styles.comment__list}>
        {comments.map((comment) => (
          <Comment key={comment} content={comment} />
        ))}
      </section>
    </article>
  )
}
