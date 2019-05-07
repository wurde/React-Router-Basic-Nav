'use strict'

const React = require('react')
const react_router_dom = require('react-router-dom')
const components = require('./components/index')

/**
 * Constants
 */

const BrowserRouter = react_router_dom.BrowserRouter
const Route = react_router_dom.Route
const HomePage = components.HomePage
const AboutPage = components.AboutPage
const ContactPage = components.ContactPage

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
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
    </BrowserRouter>
  )
}

/**
 * Export component
 */

module.exports = App
