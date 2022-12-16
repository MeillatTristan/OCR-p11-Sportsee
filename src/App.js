
import { Route, Routes } from 'react-router-dom';

import "./css/style.css"

import Users from './pages/Users/Users';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Sidebar />
        <div className='main'>
          <Routes>
            <Route path="/users/:id" element={ <Users /> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
