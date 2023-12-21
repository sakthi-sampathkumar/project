import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Rootlayout from './layout/Rootlayout';
import Designing from './courses/designing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Rootlayout/>} />
      <Route path="designing" element={<Designing />} />
  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
