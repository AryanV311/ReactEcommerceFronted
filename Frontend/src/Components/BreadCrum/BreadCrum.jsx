import "./BreadCrum.css"
import arrow_icon from "../../assets/breadcrum_arrow.png"

export const BreadCrum = (props) => {
    const {product} = props

  return (
    <div className="breadcum">
        Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}
