import React from 'react'
import CExternalLink from '../components/CExternalLink'

const SFooter = () => {
  return (
    <footer>
      <div className="socials">
        <CExternalLink link="https://www.facebook.com/" icon="fa-brands fa-facebook-f" />
        <CExternalLink link="https://www.instagram.com" icon="fa-brands fa-instagram" />
        <CExternalLink link="https://twitter.com/" icon="fa-brands fa-twitter" />
        <CExternalLink link="https://www.google.com/" icon="fa-brands fa-google" />
        <CExternalLink link="https://www.linkedin.com/" icon="fa-brands fa-linkedin" />
      </div>
      <p className="copyright">© 2022 Fixxo. All Rights Reserved</p>
    </footer>
  )
}

export default SFooter