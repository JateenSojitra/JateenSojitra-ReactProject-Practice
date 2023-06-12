import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import HomeDashboard from '../HomeDashboard'
import HomeDashboard from './Components/HomeDashboard';
import Calculator from './Components/Calculator'
import About from './Components/About'
import StopWatch from './Components/StopWatch'
import Wether from './Components/Wether'
import SidebarRouter from './Components/Sidebar/SidebarRouter';

function App() {
  return (
    <BrowserRouter>
    <SidebarRouter>
        <Routes>
          <Route path='/' element={<HomeDashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/stopWatch' element={<StopWatch />} />
          <Route path='/wether' element={<Wether />} />
        </Routes>
    </SidebarRouter>
      </BrowserRouter>
  );
}

export default App;
