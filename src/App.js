import axios from "axios";
import {React ,Component}from "react";
import Add from './components/Add';
import Create from './components/Create';
import Read from './components/Read';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route} from 'react-router-dom';

class App extends Component  {
  
  render(){
  return (
    <>
    <Add/>
     <Routes>
      <Route path='/' element={<Read/>} />
      <Route path='/Create' element={<Create />} />
     </Routes>
      
      
      </>
  )
 }
}

export default App;
