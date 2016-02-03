/**
 * Modules
 */

/**
 * Expose isGlobal
 */

module.exports = isGlobal

/**
 * isGlobal
 */

function isGlobal (obj) {
  if (typeof global === 'undefined') {
    return obj === window
  } else {
    return obj === global
  }
}
