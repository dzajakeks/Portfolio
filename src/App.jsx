import Header from './components/Header/Header';
import ParticlesBg from './ParticlesBg';
import { AboutMe, Skills, Projects, Contact } from './components/Main/index';
import Navigation from './components/Header/Navigation';

function App() {
  return (
    <>
      <div
        id='bodyCont'
        className='text-white font-Cousine h-screen overflow-hidden '
      >
        <div className='bg-gradient-to-b from-[#231933] to-[#120B1C] text-center relative overflow-hidden'>
          <ParticlesBg />
          <Header />
        </div>
        <div className='blackedOutContent '>
          <main
            id='mainContent'
            className='hidePageContent bg-[#120B1C] h-full pt-24'
          >
            <Navigation />
            <section id='aboutme' className='sections'>
              <AboutMe />
            </section>
            <section id='skills' className='sections '>
              <Skills />
            </section>
            <section id='projects' className='sections '>
              <Projects />
            </section>
            <section id='contact' className='sections '>
              <Contact />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
