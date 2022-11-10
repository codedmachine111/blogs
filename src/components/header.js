import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import profile from "../assets/cropped.jpg"
import './header.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
      <div className="img-logo">
       <img src={profile} alt=""/>
       <p>MY BLOGS</p>
      </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
