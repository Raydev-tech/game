import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Navbar from './Components/Navbar'
import HomePage from './Pages/Homepage'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Toaster />
    </>
  )
}

export default App
