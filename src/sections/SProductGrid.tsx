import React from 'react'
import CProductCard from '../components/CProductCard'
import { Product } from '../models/productModel'

interface ProductGridType {
  title: string
  items: Product[]
}

const SProductGrid: React.FC<ProductGridType> = ({title, items})  => {

  return (
    <section className="product-grid">
    <div className="_container">
      <h1 className="product-h1">{title}</h1>
      <div className="grid">
        {
          items.map(product => <CProductCard key={product.articleNumber} item={product} />)
        }
      </div>
    </div>
  </section>
  )
}

export default SProductGrid