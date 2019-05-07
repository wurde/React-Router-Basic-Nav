'use strict'

/**
 * Dependencies
 */

const React = require('react')
const shared = require('../shared/index')

/**
 * Define component
 */

function HomePage() {
  return (
    <div className="jsx-HomePage">
      <shared.Navigation />
      <h1>Home Page</h1>
    </div>
  )
}

/**
 * Export component
 */

module.exports = HomePage
