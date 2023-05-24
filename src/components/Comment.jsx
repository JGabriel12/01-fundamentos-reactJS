import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './avatar'

export function Comment(){
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
            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!!</p>
        </div>   
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}