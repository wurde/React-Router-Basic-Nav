'use strict'

const React = require('react')
const react_router_dom = require('react-router-dom')
const components = require('./components/index')

/**
 * Constants
 */

const BrowserRouter = react_router_dom.BrowserRouter
const Route = react_router_dom.Route

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define component
 */

function App() {
  return (
    <BrowserRouter>
      <components.Navigation />

      <Route exact path="/" component={components.Home} />
      <Route path="/about" component={components.About} />
      <Route path="/contact" component={components.Contact} />
    </BrowserRouter>
  )
}

/**
 * Export component
 */

module.exports = App
