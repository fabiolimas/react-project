import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Container from './layouts/Container'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Empresa from './pages/Empresa'
import NovoProjeto from './pages/NovoProjeto'
import Projects from './pages/Projects'


function App() {
  return (
    <Router>
      <Navbar/>
     <Container customClass="min-height">
            <Routes>
            
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/contato' element={<Contato />} />
                <Route exact path='/empresa' element={<Empresa />} />
                <Route exact path='/novo_projeto' element={<NovoProjeto />}/>
                <Route exact path='/projetos' element={<Projects />}/>
            
            </Routes>
        </Container>
      <Footer />
    </Router>
  )
}

export default App;
