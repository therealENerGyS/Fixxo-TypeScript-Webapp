import React, { useEffect } from 'react'
import CTopProducts from '../components/CTopProducts'
import { useProductContext } from '../contexts/ProductContext'
import { ProductContextType } from '../models/productModel'

const STopProducts = () => {

  const { topProducts, getTopProducts } = useProductContext() as ProductContextType
  useEffect(() => {
    getTopProducts(3)
  })
  
  return (
    <section className="top-products">
      <div className="_container">
        <div className="top-products-flex">
          <CTopProducts title="Latest Product" items={topProducts} />
          <CTopProducts title="Best Selling Product" items={topProducts} />
          <CTopProducts title="Top Reacted Product" items={topProducts} />
        </div>
      </div>
    </section>
  )
}

export default STopProducts