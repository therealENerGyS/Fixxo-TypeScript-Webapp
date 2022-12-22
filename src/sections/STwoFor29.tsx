import React from "react"
import CProductCard from "../components/CProductCard"
import { Product } from "../models/productModel"

interface IProductGridType {
  items: Product[]
}

const STwoFor29: React.FC<IProductGridType> = ({items}) => {
  return (
    <section className="two-for-deal-29">
      <div className="_container">
        <div className="two-for">
          <h2 className="two-for-header">2 FOR USD $29</h2>
          <button type="button" className="btn-theme btn-white">
            FLASE SALE
          </button>
        </div>
        <div className="grid-two-for">
        {
          items.map(product => <CProductCard key={product.articleNumber} item={product} />)
        }
        </div>
      </div>
    </section>
  )
}

export default STwoFor29
