const noop = () => {}

test('Import immutable lib', () => {
  var Immutable = require('immutable');
  expect(Immutable)
    .toBeDefined();
})

test('Create a Map', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });
})

test('Get Map property', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });
})