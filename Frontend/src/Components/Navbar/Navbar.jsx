import logo from "../../assets/logo.png"
import cart from "../../assets/cart_icon.png"
import "./Navbar.css"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ShopContext } from "../../context/ShopContext"
import userProfile from "../../assets/user-profile.png"
import dropdown_icon from "../../assets/dropdown_icon.png"

export const Navbar = () => {
  const {getTotalCartItems,userData,logoutUser} = useContext(ShopContext)
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const [showMenu, setShowMenu] = useState("shop")
  console.log("object", userData);

  const navigate = useNavigate();

  // const logout = () => {
  //   localStorage.removeItem("currentUser")
  //   navigate("/login")
  // }

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      setIsLoggedOut(false);
    }
  }, [userData]);
  

 

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
          <li onClick={() => setShowMenu("women")}><Link to='/womens'>Women</Link>{showMenu === "women" ? <hr /> :""}</li>
          <li onClick={() => setShowMenu("kids")}><Link to='/kids'>Kids</Link>{showMenu === "kids" ? <hr /> :""}</li>
      </ul>

      <div className="nav-cart">
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className="nav-count-cart">{getTotalCartItems()}</div>
        {
          userData || isLoggedOut ? (
            <div className="user-menu">
            <div className="user-menu-trigger">
              <img className="user-avatar" src={userProfile} alt="User Avatar" />
              <img className="dropdown-icon" src={dropdown_icon} alt="Dropdown Icon" />
              <div className="user-menu-dropdown">
                <div className="dropdown-content">
                  <p onClick={() => navigate("my-profile")} className="dropdown-item">
                    My Profile
                  </p>
                  <p onClick={logoutUser}  className="dropdown-item">
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </div>      
          ):(
            <Link to='/login'><button>Login</button></Link>
          )
        }
      </div>
    </div>
  )
}
