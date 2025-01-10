import logo from "../../assets/logo.png"
import cart from "../../assets/cart_icon.png"
import "./Navbar.css"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../context/ShopContext"

export const Navbar = () => {
  const {getTotalCartItems} = useContext(ShopContext)

  const [showMenu, setShowMenu] = useState("shop")

  return (
    <div className="navbar">
      <Link to='/'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>TORRES</p>
      </div>
      </Link>

      <ul className="nav-menu">
          <li onClick={() => setShowMenu("shop")}><Link to='/'>Shop</Link>{showMenu === "shop" ? <hr /> :""}</li>
          <li onClick={() => setShowMenu("men")}><Link to='/mens'>Men</Link>{showMenu === "men" ? <hr /> :""}</li>
          <li onClick={() => setShowMenu("women")}> <Link to='/womens'>Women</Link>{showMenu === "women" ? <hr /> :""}</li>
          <li onClick={() => setShowMenu("kids")}><Link to='/kids'>Kids</Link>{showMenu === "kids" ? <hr /> :""}</li>
      </ul>

      <div className="nav-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className="nav-count-cart">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
