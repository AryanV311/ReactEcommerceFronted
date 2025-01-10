import exclusive_img  from "../../assets/exclusive_image.png"
import "./Offer.css"

export const Offer = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offer For You</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive_img} alt="" />
        </div>
    </div>
  )
}
