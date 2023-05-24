import { Comment } from './Comment'
import styles from './Post.module.css'
import { Avatar } from './avatar'

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>João Gabriel</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time title="11 de Maio as 22:09" dateTime='2022-05-21 22:09:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👋</p>
        <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#"> jane.design/doctorcare </a> </p>
        <p> <a href="#"> #novoprojeto #nlw #rocketseat </a> </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe seu comentário'
        />
        
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}