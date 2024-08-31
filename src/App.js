
import './App.css';
import Header from './components/Headers';
import Hero from './components/Hero';
import About from './components/about';
import Project from './components/projects';
import Resume from './components/resume'
import Contact from './components/contact'


function App() {
  return (
    
    <div className='App'>
   <Header />
   <Hero />
   <About/>
   <Project/>
   <Resume/>
  </div>
  );
}

export default App;
