const noop = () => { }

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
  var b = map1.get("b");
  expect(b)
    .toEqual(2);
})

test('update a Map', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  var map2 = map1.set("a", 10);
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ a: 10, b: 2, c: 3 });
})

test('update a Map using merge', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  var map2 = map1.merge({ "a": 10, "d": 4 });
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ a: 10, b: 2, c: 3, d: 4 });
})

test.only('update a Map using update', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  var map2 = map1
    .set("b", 3)
    .update("b", (v) => {
      return v > 2 ? 99 : v;
    });
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ a: 1, b: 99, c: 3 });

})

test('Delete from map', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  var map2 = map1.delete("a");
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ b: 2, c: 3 });
})