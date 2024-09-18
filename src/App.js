import { createContext } from 'react';
import './App.css';
import ToDoYhia from './componentProject2/toDoYhia/ToDoYhia';
// import About from './component/About/About';
// import Contact from './component/Contact/Contact';
// import Home from './component/Home/Home';
// import Navbar from './component/Navbar/Navbar';
// import NotFound from './component/NotFound/NotFound';
// import Sidebar from './component/sidebar/Sidebar';
// import ToDoList from './component/ToDoList/ToDoList';
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';

export const ahmed=createContext();
function App() {

  return (
    <div className="App">
      <ToDoYhia/>
{/* 
      <ahmed.Provider value="makarona">

     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
     </BrowserRouter>
      </ahmed.Provider> */}
     

    </div>
  );
}

export default App;
