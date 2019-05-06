'use strict'

const React = require('react')
const components = require('./components/index')

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define component
 */

function App() {
  return (
    <div>
      <components.Navigation />
    </div>
  )
}

/**
 * Export component
 */

module.exports = App
