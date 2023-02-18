import {Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Missing from './components/Missing'
import Payment from './components/Payment'
import CourseCorrection from './components/dashboard/CourseCorrection'
import HomeDashboard from './components/dashboard/HomeDashboard'
import DashboardLayout from './components/DashboardLayout'
import PasswordUpdate from './components/dashboard/PasswordUpdate'
import Clearance from './components/dashboard/Clearance'
import Disciplinary from './components/dashboard/Disciplinary'
import PpaLetter from './components/dashboard/PpaLetter'
const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' index element={<Home/>}/>
        <Route path='verify-payment' element={<Payment/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Signup/>}/>
        <Route path='dashboard' element={<DashboardLayout/>}>
          <Route index element={<HomeDashboard/>} />
          <Route path='course-correction' element={<CourseCorrection/>}/>
          <Route path='password-update' element={<PasswordUpdate/>}/>
          <Route path='ppa-letter' element={<PpaLetter/>}/>
          <Route path='clearance' element={<Clearance/>}/>
          <Route path='disciplinary-case' element={<Disciplinary/>}/>
        </Route>
        <Route path='*' element={<Missing/>}/>
      </Route>
    </Routes>
  );
}

export default App;
