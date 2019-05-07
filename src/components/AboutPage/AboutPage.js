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

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>About Page</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * Export component
 */

module.exports = AboutPage
