/**
 * Imports
 */

var isGlobal = require('..')
var test = require('tape')

/**
 * Tests
 */

test('global should be global', function (t) {
  t.equal(isGlobal(global), true)
  t.end()
})

test('object should not be global', function (t) {
  t.equal(isGlobal({}), false)
  t.end()
})

test('undefined should not be global', function (t) {
  t.equal(isGlobal(), false)
  t.end()
})
