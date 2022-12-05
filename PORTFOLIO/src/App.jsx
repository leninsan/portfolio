import styles from './App.module.css'
import { Navbar } from './sections/Navbar'
import { Content } from './components/Content'
import { AboutMe } from './sections/AboutMe'
import { Services } from './sections/Services'
import { ContactMe } from './sections/ContactMe'
function App() {

  return (
    <>
      <div className = {styles.hero}>
        <Navbar/>
        <Content/>
        <AboutMe/>
        <Services/>
        <ContactMe/>
      </div>
    </>
  )
}

export default App
