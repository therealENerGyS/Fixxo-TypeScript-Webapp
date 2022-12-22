import React from "react"
import CProductCard from "../components/CProductCard"
import { Product } from '../models/productModel'

interface IProductGridType {
  items: Product[]
}

const STwoFor49: React.FC<IProductGridType> = ({items}) => {
  return (
    <section className="two-for-deal-49">
      <div className="_container">
        <div className="grid-two-for">
        {
          items.map(product => <CProductCard key={product.articleNumber} item={product} />)
        }
        </div>
        <div className="two-for">
          <h2 className="two-for-header">2 FOR USD $49</h2>
          <button type="button" className="btn-theme btn-white">
            FLASE SALE
          </button>
        </div>
      </div>
    </section>
  )
}

export default STwoFor49
