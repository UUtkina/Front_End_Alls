import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './componens/Layout';
import Home from './componens/Home';
import Contact from './componens/Contact';
import Blogs from './componens/Blogs';
import ToDo from './componens/ToDo';
import User from './componens/User';
import Coments from './componens/Coments';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Layout />}>
        <Route index element={<User />}/>
        <Route path='/coment' element={<Coments />}/>
        <Route path='/blog' element={<Blogs />}/>
        <Route path='/ToDo' element={<ToDo />}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
