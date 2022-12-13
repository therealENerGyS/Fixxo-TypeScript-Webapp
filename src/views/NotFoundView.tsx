import React from 'react'
import SFooter from '../sections/SFooter'
import SMainMenu from '../sections/SMainMenu'

const NotFoundView = () => {
  return (
    <>
      <SMainMenu />
      <div className="_container">
        <h1>404 - Page Not Found</h1>
      </div>
      <div className="footernotfound">
      <SFooter />
      </div>
    </>
  )
}

export default NotFoundView