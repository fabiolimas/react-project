import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
     
      <Footer />
    </Router>
  )
}

export default App;
