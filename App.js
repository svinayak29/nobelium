
import './App.css';

import { Returnheading } from './Returnheading';
import { Returninputfields } from './Returninputfields';
import { Returnsubmitbutton } from './Returnsubmitbutton';




function App() {
  const name= "Register here ..."
  const name1= "submit"
  return (
    <div className="App">
     <h1>Register here...</h1>
     <form action ="">
      <input type="text" placeholder='mobile ...' ></input> <br/>
      <br/>
      <input type="text" placeholder='password ...'></input> <br/>
      <br/>
      <button>submit</button>
      
       
      

     </form>
     <Returnheading name ={name} />
     <Returninputfields/>
     <Returnsubmitbutton name1 ={name1} />
     
    </div>
  );
}

export default App;
