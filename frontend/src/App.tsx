import { Routes, Route, Link } from 'react-router-dom'
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Container, Navbar } from 'react-bootstrap';

function App() {
  return (
    <>
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About Me</Link>
        </Container>
      </Navbar><br />
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  </>
  );
}

export default App;
