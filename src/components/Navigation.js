'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const styles = require('./styles/index')

/**
 * Constants
 */

const Link = react_router_dom.Link

/**
 * Define component
 */

function Navigation() {
  return (
    <div>
      <styles.NavigationStyle>
        <h1>React Router Mini</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contct</Link>
        </div>
      </styles.NavigationStyle>
    </div>
  )
}

/**
 * Export component
 */

module.exports = Navigation
