import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Users from './components/Users'



function App() {
  return (
    <>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Users />} />
        <Route path="/users" element={<Contact />} />
      </Routes>
    </>
  )
}
export default App
