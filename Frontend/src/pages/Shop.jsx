
import { Popular } from '../Components/Popular/Popular'
import { Hero } from '../Components/Hero/Hero'
import { Offer } from '../Components/Offer/Offer'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'


export const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offer />
        <NewCollections />
        <NewsLetter />
    </div>
  )
}
