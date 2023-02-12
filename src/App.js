import {Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Missing from './components/Missing'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Signup/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<Missing/>}/>
      </Route>
    </Routes>
  );
}

export default App;
