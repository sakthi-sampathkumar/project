import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Rootlayout from './layout/Rootlayout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Rootlayout/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
