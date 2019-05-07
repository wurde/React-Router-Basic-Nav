'use strict'

/**
 * Dependencies
 */

const React = require('react')
const shared = require('../shared/index')

/**
 * Define component
 */

function ContactPage() {
  return (
    <div className="jsx-ContactPage">
      <shared.Navigation />
      <h1>Contact Page</h1>
    </div>
  )
}

/**
 * Export component
 */

module.exports = ContactPage
