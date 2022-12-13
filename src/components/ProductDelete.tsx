import React from 'react'

const ProductDelete = () => {
  return (
    <form className="product-delete">
    <h2>Delete Product</h2>
    <input type="text" placeholder="Enter article number" />
    <button type="submit" className="btn-theme btn-red">Delete Product</button>
</form>
  )
}

export default ProductDelete