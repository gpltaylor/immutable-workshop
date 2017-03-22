const noop = () => { }

test('Import immutable lib', () => {
  // Import Immutable
  expect(Immutable)
    .toBeDefined();
})

test('Create a Map', () => {
  var Immutable = require('immutable');
  // Create a map using Immutable.Map({...})
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });
})

test('Get Map property', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  // Get a property using get(...)
  expect(b)
    .toEqual(2);
})

test('update a Map using set', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  // Get a property using set(...)
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ a: 10, b: 2, c: 3 });
})

test('update a Map using merge', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  // Update and add properties using merge(...)
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ a: 10, b: 2, c: 3, d: 4 });
})

test('update a Map using update', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  // Update property "B" to 99, if value is greater than 2 using update(...)
  // hint, you can chain Immutable methods together : set(...).update(...)
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ a: 1, b: 99, c: 3 });

})

test('Delete from map', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  // Delete a property from the map using delete(...)
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ b: 2, c: 3 });
})

test('updateIn map', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ inMap: Immutable.Map({ inList: Immutable.List([1, 2, 3]) }) });
  // update using updateIn(...) using a push for the inner item

  expect(map2.toJS())
    .toEqual({
      inMap: {
        inList: [1, 2, 3, 4]
      }
    });
})