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

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Home Page</h1>
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

module.exports = HomePage
