import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Filter from './components/Filter';
import AnimatedRoutes from './components/AnimatedRoutes';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Filter />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
