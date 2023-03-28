import './App.css';
import { Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import { Login } from './components/Login';
import HomePage from './components/HomePage';


function App() {
  return (
   <>
   <Routes>
   <Route path='/' element ={<SignUp/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/home' element={<HomePage/>}/>
   </Routes>
   </>
  );
}

export default App;