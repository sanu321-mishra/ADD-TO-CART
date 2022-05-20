
import './App.css';
import Cards from './components/Cards';
import Myheader from './components/Myheader';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Myheader></Myheader>
      <Routes>
        <Route path='/' element={<Cards/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
