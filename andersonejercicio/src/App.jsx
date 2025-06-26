import { Sidebar } from './Components/SideBar';
import { Section } from './Components/Section';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Section />
      </main>
    </div>
  );
}

export default App;
