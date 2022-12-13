import React, { useEffect } from 'react'
import SFooter from '../sections/SFooter'
import SMainMenu from '../sections/SMainMenu'
import SMainShowcase from '../sections/SMainShowcase'
import SWinterArrivals from '../sections/SWinterArrivals'
import SProductGrid from '../sections/SProductGrid'
import SPamelaConscious from '../sections/SPamelaConscious'
import SSpeciality from '../sections/SSpeciality'
import STwoFor29 from '../sections/STwoFor29'
import STwoFor49 from '../sections/STwoFor49'
import SDiscountBanner from '../sections/SDiscountBanner'
import STopProducts from '../sections/STopProducts'
import SShoppingBenefits from '../sections/SShoppingBenefits'
import { useProductContext } from '../contexts/ProductContext'
import { ProductContextType } from '../models/productModel'

const HomeView = () => {

  const {featuredProducts, getFeaturedProducts} = useProductContext() as ProductContextType
  const {twoForProducts, getTwoForProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeaturedProducts(8)
    getTwoForProducts(4)
  }, [])

  return (
    <>
      <SMainMenu />
      <SMainShowcase />
      <SWinterArrivals />
      <SProductGrid title="Featured Products" items={featuredProducts}/>
      <SPamelaConscious />
      <SSpeciality />
      <STwoFor29 items={twoForProducts} />
      <STwoFor49 items={twoForProducts} />
      <SDiscountBanner />
      <STopProducts />
      <SShoppingBenefits />
      <SFooter />
    </>
  )
}

export default HomeView