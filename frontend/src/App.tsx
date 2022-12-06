import { Routes, Route, Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap';
import { Home } from './pages/Home/Home'
import { LogIn } from './pages/LogIn/LogIn';
import {ContactUs} from './pages/ContactUs/ContactUs'
import { Event } from './pages/Events/Event';

import 'bootstrap/dist/css/bootstrap-grid.css';
import { Add } from './pages/Add/Add';
import AddEventType from './pages/AddEventType/AddEventType';
import AddLocation from './pages/AddLocation/AddLocation';
import SignUp from './pages/SignUp/SignUp';
import Settings from './pages/Settings/Settings';


function App() {
  return (
    <>
      <Routes>
        { <><Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/AddEventType" element={<AddEventType />} />
        <Route path="/AddLocation" element={<AddLocation />} />
        <Route path="/Settings" element={<Settings />} />
        </>}
      </Routes>
  </>
  );
}

export default App;
