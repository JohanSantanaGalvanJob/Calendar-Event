import { Routes, Route, Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap';
import { Home } from './pages/Home/Home'
import { SignUp } from './pages/SignUp/SignUp'
import { LogIn } from './pages/LogIn/LogIn';

import 'bootstrap/dist/css/bootstrap-grid.css';

function App() {
  return (
    <>
    {/* <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About Me</Link>
          <Link className="nav-link" to="/SignUp">About Me</Link>
        </Container>
      </Navbar><br /> */}
    
      <Routes>
        { <><Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        </>
        /*<Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/SignUp" element={<SignUpForm />} /> */}
      </Routes>
    {/* </Container> */}
  </>
  );
}

export default App;
