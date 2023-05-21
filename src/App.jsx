import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="João Gabriel"
        content="Olá, eu sou o joão!"
      />
      <Post 
        author="Maria Fernanda"
        content="Oie gente, eu sou a Maria!"
      />
    </div>
  )
}


