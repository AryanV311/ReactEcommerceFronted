import { useContext } from "react"
import {ShopContext} from "../context/ShopContext"
import { useParams } from "react-router-dom"
import { BreadCrum } from "../Components/BreadCrum/BreadCrum"
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay"
import { DescriptionBox } from "../Components/DescriptionBox/DescriptionBox"
import { RelatedProducts } from "../Components/RelatedProducts.jsx/RelatedProducts"


export const Products = () => {

  const { all_products } = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_products.find((e) => e.id === Number(productId))

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}
