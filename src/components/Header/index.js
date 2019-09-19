import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.less"

const Header = ({ siteTitle }) => (
  <header id="header">
    <div>
      <h1>
        <Link to="/" className="header-link">
          {siteTitle}
        </Link>
      </h1>
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
