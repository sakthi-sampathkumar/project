import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Rootlayout from './layout/Rootlayout';
import Designing from './courses/designing';
import Programming from './courses/programming';
import Graphics from './courses/graphics';
import Frontend from './courses/frontend';
import Photography from './courses/photography';
import Tech from './nav1links/tech';
import Contactus from './nav1links/contactus';
import Aboutus from './nav1links/aboutus';
import Login from './nav1links/login';
import Python from './nav2links/python';
import Reactnav from './nav2links/react';
import Unitynav from './nav2links/unity';
import Uiux from './nav2links/uiux';
import Vector from './nav2links/vector';
import Aftereffects from './nav2links/aftereffects';
import Lightroom from './nav2links/lightroom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Rootlayout/>} />
      <Route path="/home" element={<Rootlayout/>} />
      <Route path="/design" element={<Designing />} />
      <Route path="/programming" element={<Programming/>} />
      <Route path="/graphics" element={<Graphics/>} />
      <Route path="/frontend" element={<Frontend/>} />
      <Route path="/photography" element={<Photography/>} />
      <Route path="/tech" element={<Tech/>} />
      <Route path="/contactus" element={<Contactus/>} />
      <Route path="/aboutus" element={<Aboutus/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/python" element={<Python/>} />
      <Route path="/react" element={<Reactnav/>} />
      <Route path="/unity" element={<Unitynav/>} />
      <Route path="/uiux" element={<Uiux/>} />
      <Route path="/vector" element={<Vector/>} />
      <Route path="/aftereffects" element={<Aftereffects/>} />
      <Route path="/lightroom" element={<Lightroom/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
