import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocket'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-05-22 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/maykbrito.png',
      name: 'Mayk brito',
      role: 'Educator'
    },
    content: [
      {type: 'paragraph', content: 'Um post muito legal!'},
      {type: 'paragraph', content: 'lorem impsum dolor dasindias sadamsd asdas 🚀'},
      {type: 'link', content: 'gaba.tutoriais/homepage'},
    ],
    publishedAt: new Date('2023-05-24 20:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}


