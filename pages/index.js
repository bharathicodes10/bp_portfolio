import Head from 'next/head'
import About from '../components/About'
import CodeProfile from '../components/CodeProfile'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Bharathi | Full - Stack Developer </title>
        <meta name="description" content="I’m a web developer specializing in building full stack applications" />
        <link rel="icon" href="/navlogo.png" height="12px" width="15px"/>
      </Head>
    <Main />
    <About />
    <CodeProfile/>
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
