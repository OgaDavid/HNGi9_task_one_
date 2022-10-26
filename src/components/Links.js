import React from 'react'
import links from '../Data/LinkData'
import Link from '../utils/Link'

const Links = () => {
  return (
    <main>
        <div className="links">
            {links.map(Link)}
        </div>
    </main>
  )
}

export default Links;