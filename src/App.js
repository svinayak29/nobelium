
import './App.css';
import { Routes,Route } from 'react-router-dom';
import AboutUs from './component/AboutUs';
import Login from './component/Login';
import Register from './component/Register';
function App() {
  return (
    <div >
     <Routes>
   
     <Route path='/' element = {<AboutUs/>} />
     <Route path='/login' element = {<Login />} />

     <Route path='/register' element= {<Register/>}  />

     </Routes>

     
    </div>
  );
}

export default App;
