import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './avatar'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }){
  const [likeNumber, setLikeNumber] = useState(0)

  function handleLikeClick() {
    setLikeNumber(likeNumber + 1)
  }

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (

    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/JGabriel12.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Marinho</strong>
              <time title="11 de Maio as 22:09" dateTime='2022-05-21 22:09:30'>Cerca de 1hr atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>   
        <footer>
          <button onClick={handleLikeClick}>
            <ThumbsUp />
            Aplaudir <span>{likeNumber}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}