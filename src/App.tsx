import Contact from '@pages/Contact';
import Home from '@pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
