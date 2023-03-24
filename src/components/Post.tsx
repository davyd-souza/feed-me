// DEPENDENCY
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import dayjs from 'dayjs'

// COMPONENT
import { Avatar } from './Avatar'
import { Comment } from './Comment'

// STYLE
import styles from './Post.module.css'
import { PaperPlaneRight } from 'phosphor-react'

// TYPE
interface Author {
  avatarUrl: string
  name: string
  role: string
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
  to?: string
}

export interface IPost {
  id: number
  author: Author
  content: Content[]
  publishedAt: Date
}

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(['Post tooop! 🚀'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormated = dayjs(post.publishedAt).format(
    'MMMM DD[,] YYYY [at] hh[:]mmA'
  )

  const handleNewComment = (e: FormEvent) => {
    e.preventDefault()

    setComments((prevState) => [newCommentText, ...prevState])
    setNewCommentText('')
  }

  const handleNewCommentTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    ;(e.target as HTMLTextAreaElement).setCustomValidity('')
    setNewCommentText(e.target.value as string)
  }

  const handleNewCommentInvalid = (e: InvalidEvent<HTMLTextAreaElement>) => {
    ;(e.target as HTMLTextAreaElement).setCustomValidity(
      'Este campo é obrigatório'
    )
  }

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeleted = comments.filter(
      (comment) => comment !== commentToDelete
    )

    setComments(commentsWithoutDeleted)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header className={styles.post__header}>
        <div className={styles.post__author}>
          <Avatar src={post.author.avatarUrl} alt={post.author.name} />
          <div>
            <p className='user__name'>{post.author.name}</p>
            <span className='user__role'>{post.author.role}</span>
          </div>
        </div>

        <time
          className='date'
          title={publishedDateFormated}
          dateTime={post.publishedAt.toISOString()}
        >
          Published {dayjs(post.publishedAt).fromNow()}
        </time>
      </header>

      <section className={styles.content}>
        {post.content.map((line) => {
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
          onChange={handleNewCommentTextChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer className={styles.comment__footer}>
          <button
            className='button'
            data-variant='fill'
            disabled={isNewCommentEmpty}
          >
            Comment
            <PaperPlaneRight />
          </button>
        </footer>
      </form>

      <section className={styles.comment__list}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </section>
    </article>
  )
}
