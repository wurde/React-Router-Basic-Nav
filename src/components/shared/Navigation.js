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
    <header>
      <styles.NavigationStyle>
        <div className="container">
          <div className="row py-4">
            <div className="col-12 col-md-4 d-flex align-items-center">
              <h3>React Router Mini</h3>
            </div>

            <div className="col-12 col-md-3"></div>

            <div className="col-12 col-md-5 d-flex justify-content-between align-items-center">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contct</Link>
            </div>
          </div>
        </div>
      </styles.NavigationStyle>
    </header>
  )
}

/**
 * Export component
 */

module.exports = Navigation
