import React from 'react'

const CExternalLink = (link: any, icon: any) => {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}

export default CExternalLink