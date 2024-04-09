import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage.tsx';
import { About } from './pages/About.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
