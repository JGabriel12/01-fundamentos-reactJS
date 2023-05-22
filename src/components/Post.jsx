import styles from './Post.module.css'

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar}
            src="https://github.com/JGabriel12.png" 
          />
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
    </article>
  )
}