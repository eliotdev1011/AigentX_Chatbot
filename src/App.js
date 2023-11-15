import './App.css';
import Landing from './components/Landing';
import AigentX from './components/AigentX';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/aigentx' element={<AigentX />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
