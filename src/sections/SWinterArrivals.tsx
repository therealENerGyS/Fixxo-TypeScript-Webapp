import React from 'react'

const SWinterArrivals = () => {
  return (
    <section className="winter-arrivals">
    <div className="_container">
      <div className="winter-clearance">
        <div className="winter-text">
          <h2 className="showcase-header">Winter Clearance<br />Up to 70% Off!</h2>
          <p className="showcase-p">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem apriam eaque ipsa quae
            ab illo inventore.
          </p>
          <button type="button" className="btn-theme btn-black showcase-button">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="new-arrivals">
        <div className="new-arrivals-text">
          <h2 className="showcase-header">New<br />Arrivals</h2>
          <button type="button" className="btn-theme btn-black showcase-button">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SWinterArrivals