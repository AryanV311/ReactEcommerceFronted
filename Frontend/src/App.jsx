
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ShopCategory } from './pages/ShopCategory'
import { Products } from './pages/Products'
import { Cart } from './pages/Cart'
import { Navbar } from './Components/Navbar/Navbar'
import { Footer } from './Components/Footer/Footer'
import men_banners from "./assets/banner_mens.png"
import women_banners from "./assets/banner_women.png"
import kids_banners from "./assets/banner_kids.png"
import { Shop } from './pages/Shop'
import { LoginSignup } from './pages/Loginsignup'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banners} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banners} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kids_banners} category="kid" />} />
        <Route path='/product' element={<Products />} >
          <Route path=':productId' element={<Products />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='Login' element={<LoginSignup />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
