import './App.css';
import Landing from './components/Landing';
import AigentX from './components/AigentX';
import EditGroups from './components/AigentX/EditGroups';
import EditKnowledge from './components/AigentX/EditKnowledge';
import Stake from './components/AigentX/Stake';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, createContext, useContext } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [signed, setSigned] = useState(0);
  const [barerToken, setBarerToken] = useState("");
  const [groups, setGroups] = useState("");

  return (
    <MyContext.Provider value={{ signed, setSigned, barerToken, setBarerToken, groups, setGroups}}>
      {children}
    </MyContext.Provider>
  );
};

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/webchat' element={<Landing />}></Route> */}
          <Route path='/' element={<AigentX />}></Route>
          <Route path='/aigentx' element={<AigentX />}></Route>
          <Route path='/aigentx/editgroups' element={<EditGroups />}></Route>
          <Route path='/aigentx/editknowledge' element={<EditKnowledge />}></Route>
          {/* <Route path='/aigentx/stake' element={<Stake />}></Route> */}
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
