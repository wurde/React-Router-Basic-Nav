'use strict'

/**
 * Dependencies
 */

const styled_components = require('styled-components')

/**
 * Constants
 */

const styled = styled_components.default

/**
 * Define style component
 */

let NavigationStyle = styled.div(() => `
  background-color: #333;
  color: #FFF;

  a {
    color: #FFF;
    padding: 15px 25px;
  }
  a:hover {
    color: #DDD;
  }
  a:active {
    color: #999;
  }
`)

/**
 * Export style component
 */

module.exports = NavigationStyle
