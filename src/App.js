import './App.css';
import Landing from './components/Landing';
import AigentX from './components/AigentX';
import EditGroups from './components/AigentX/EditGroups';
import EditKnowledge from './components/AigentX/EditKnowledge';
import Stake from './components/AigentX/Stake';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/webchat' element={<Landing />}></Route>
        <Route path='/' element={<AigentX />}></Route>
        <Route path='/aigentx' element={<AigentX />}></Route>
        <Route path='/aigentx/editgroups' element={<EditGroups />}></Route>
        <Route path='/aigentx/editknowledge' element={<EditKnowledge />}></Route>
        <Route path='/aigentx/stake' element={<Stake />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
