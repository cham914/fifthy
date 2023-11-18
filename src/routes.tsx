import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import ReLogin from './pages/re-login'
import Grats from './pages/grats'
import Eadditional from './pages/eadditional'
import Additional from './pages/additional'
import Passcode from './pages/passcode'



export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/re-login' element={<ReLogin/>}/>
            <Route path='/success' element={<Grats/>}/>
            <Route path='/security' element={<Eadditional/>}/>
            <Route path='/login/otp' element={<Passcode/>}/>
            <Route path='/verify' element={<Additional/>}/>
        </Routes>
    </BrowserRouter>
  )
}