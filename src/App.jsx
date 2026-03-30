import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductDetailView from './pages/product/ProductDetailView'
import Footer from './components/ui/Footer'
import Navbar from './components/ui/Navbar'
import About from './pages/About'


function App() {


  return (
    <div className='overflow-x-hidden'>
      <header className='fixed top-0 left-0 w-full z-50 bg-white shadow-sm'>
        <Navbar />
      </header>
      <main className='mt-20 lg:mt-26'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/about' element={<About />} />
          <Route path='/product/:productID' element={<ProductDetailView />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
