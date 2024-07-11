 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import About from './Pages/About';
import Home from './Pages/Home';
import Dashboard from './Components/Dashboard';
import CreateHome from './Pages/CreateHome';
import EditHome from './Pages/EditHome';

 

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={<Login></Login>}></Route>
      <Route path='Dashboard' element={<Dashboard></Dashboard>}>
      <Route path='Home' element={<Home></Home>}></Route>
      <Route path='CreateHome' element={<CreateHome></CreateHome>}></Route>
      <Route path='EditHome/:empid' element={<EditHome></EditHome>}></Route>
      <Route path='About' element={<About></About>}></Route></Route>
      <Route path='Registration' element={<Registration></Registration>}></Route>
      
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
