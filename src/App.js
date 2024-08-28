import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Admin from './components/Admin';
import Phone from './components/Phone';
import Laptop from './components/Laptop';
import Groceries from './components/Groceries';
import Frangrance from './components/Fragrance';
import Skincare from './components/Skincare';
import Homedecoration from './components/Homedecoration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/phone' element={<Phone/>}/>
        <Route path='/laptop' element={<Laptop/>}/>
        <Route path='/groceries' element={<Groceries/>}/>
        <Route path='/fragrance' element={<Frangrance/>}/>
        <Route path='/skincare' element={<Skincare/>}/>
        <Route path='/homedecoration' element={<Homedecoration/>}/>
      </Routes>
    </div>
  );
}

export default App;
