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

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Contact Page</h1>
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

module.exports = ContactPage
