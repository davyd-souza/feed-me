// DEPENDENCY
import { ImgHTMLAttributes } from 'react'

// STYLE
import styles from './Avatar.module.css'

// TYPE
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  outline?: boolean
}

export function Avatar({ outline = true, ...props }: AvatarProps) {
  return (
    <img
      {...props}
      loading='lazy'
      className={`${styles.avatar} ${outline && styles.outline}`}
    />
  )
}
