import * as React from "react"
import PropTypes from "prop-types"
import profile from "../assets/cropped.jpg"
import './header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0`,
      padding: `0 2.5rem`,
      minHeight: `15vh`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
      <div className="img-logo">
       <img src={profile} alt=""/>
       <p>MY BLOGS</p>
      </div>

      <div className="nav-links">
          <li className="nav-link">
          <a href="https://github.com/codedmachine111">
            <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="nav-link">
            <a href="https://twitter.com/whoisakashh">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="nav-link">
          <a href="https://www.linkedin.com/in/akash-nayak-48210624b/">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="nav-link">
          <a href="mailto:charlesbabbage1709@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
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
