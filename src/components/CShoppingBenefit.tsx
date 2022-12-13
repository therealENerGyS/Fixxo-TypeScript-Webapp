import React from 'react'

interface IBenefit {
    icon: any
    title: string
  }

const CShoppingBenefit: React.FC<IBenefit> = ({icon, title}) => {
    return (
        <div className="benefits">
            <i className={icon}></i>
            <h2 className="benefits-h2">{title}</h2>
            <p className="benefits-p">Village did removed enjoyed explain talking.</p>
        </div>
    )
}

export default CShoppingBenefit