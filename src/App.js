import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Extras from "./pages/Extras";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/framer-motion-app/" element={<Home/>}/>
        <Route path="/framer-motion-app/about" element={<About/>}/>
        <Route path="/framer-motion-app/extras" element={<Extras/>}/>
      </Routes>
    </div>
  );
}

export default App;
