import { Section } from './Components/Section'
import { SideBar } from './Components/SideBar'
import './App.css'

function App() {
  return (
    <div className="app">
      <SideBar />
      <main className="main-content">
        <Section />
      </main>
    </div>
  )
}

export default App