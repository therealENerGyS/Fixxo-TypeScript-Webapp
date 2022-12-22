import React from "react"

interface ISpecial {
  title: string
}

const CSpeciality: React.FC<ISpecial> = ({title}) => {
  return (
    <div className="specials-div">
      <div className="specials-text">
        <h4 className="specials-title">{title}</h4>
        <a className="specials-link">Get Started &gt;</a>
      </div>
      <div className="specials-graybox"></div>
    </div>
  )
}

export default CSpeciality