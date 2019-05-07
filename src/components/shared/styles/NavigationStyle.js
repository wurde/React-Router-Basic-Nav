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
  text-align: center;
`)

/**
 * Export style component
 */

module.exports = NavigationStyle
