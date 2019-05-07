'use strict'

/**
 * Dependencies
 */

const React = require('react')
const shared = require('../shared/index')

/**
 * Define component
 */

function AboutPage() {
  return (
    <div className="jsx-AboutPage">
      <shared.Navigation />
      <h1>About Page</h1>
    </div>
  )
}

/**
 * Export component
 */

module.exports = AboutPage
