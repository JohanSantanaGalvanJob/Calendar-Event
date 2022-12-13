import { Routes, Route, Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap';
import { Home } from './pages/Home/Home'
import {ContactUs} from './pages/ContactUs/ContactUs'
import { Event } from './pages/Events/Event';

import 'bootstrap/dist/css/bootstrap-grid.css';
import { Add } from './pages/Add/Add';
import AddEventType from './pages/AddEventType/AddEventType';
import AddLocation from './pages/AddLocation/AddLocation';
import SignUp from './pages/SignUp/SignUp';
import Settings from './pages/Settings/Settings';
import './App.css'
import { EditProfile } from './pages/EditProfile/EditProfile';
import { LogIn } from './pages/LogIn/LogIn';
import { FirstPage } from './pages/FirstPage/FirstPage';


function App() {
  return (
    <>
      <Routes>
        { <>
        <Route path="/" element={<FirstPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn/>} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/AddEventType" element={<AddEventType />} />
        <Route path="/AddLocation" element={<AddLocation />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        </>}
      </Routes>
  </>
  );
}

export default App;
