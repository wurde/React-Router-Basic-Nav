'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

function Navigation() {
  return (
    <div>
      <styles.NavigationStyle>
        <h1>React Router Mini</h1>
        <div>
          <a href="">Home</a>
        </div>
        <div>
          <a href="">About</a>
        </div>
        <div>
          <a href="">Contact</a>
        </div>
      </styles.NavigationStyle>
    </div>
  )
}

/**
 * Export component
 */

module.exports = Navigation
