import { blueGrey } from '@material-ui/core/colors';
import './App.css';
import API from './Components/API'
import API2 from './Components/API2';
import Lifecycle from './Components/lifecycle';

import img from './images/bg.jpg'
function App() {
  return (
    <div className='bg' >
      <API  />
     <API2/>
   <Lifecycle/>
    </div>
  );
}

export default App;
