// COMMENT_START
/* eslint no-const-assign:0 */
// COMMENT_END
const noop = () => { }

test('Import immutable lib', () => {
  // WORKSHOP_START
  // Import Immutable
  // WORKSHOP_END
  // FINAL_START
  var Immutable = require('immutable');
  // FINAL_END
  expect(Immutable)
    .toBeDefined();
})

test('Create a Map', () => {
  var Immutable = require('immutable');
  // WORKSHOP_START
  // Create a map using Immutable.Map({...})
  // WORKSHOP_END
  // FINAL_START
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  // FINAL_END
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });
})

test('Get Map property', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  // WORKSHOP_START
  // Get a property using get(...)
  // WORKSHOP_END
  // FINAL_START
  var b = map1.get("b");
  // FINAL_END
  expect(b)
    .toEqual(2);
})

test('update a Map using set', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  // WORKSHOP_START
  // Get a property using set(...)
  // WORKSHOP_END
  // FINAL_START
  var map2 = map1.set("a", 10);
  // FINAL_END
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ a: 10, b: 2, c: 3 });
})

test('update a Map using merge', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  // WORKSHOP_START
  // Update and add properties using merge(...)
  // WORKSHOP_END
  // FINAL_START
  var map2 = map1.merge({ "a": 10, "d": 4 });
  // FINAL_END
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ a: 10, b: 2, c: 3, d: 4 });
})

test('update a Map using update', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  // WORKSHOP_START
  // Update property "B" to 99, if value is greater than 2 using update(...)
  // hint, you can chain Immutable methods together : set(...).update(...)
  // WORKSHOP_END
  // FINAL_START
  var map2 = map1
    .set("b", 3)
    .update("b", (v) => {
      return v > 2 ? 99 : v;
    });
  // FINAL_END
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ a: 1, b: 99, c: 3 });

})

test('Delete from map', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
  // WORKSHOP_START
  // Delete a property from the map using delete(...)
  // WORKSHOP_END
  // FINAL_START
  var map2 = map1.delete("a");
  // FINAL_END
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ b: 2, c: 3 });
})

test('updateIn map', () => {
  var Immutable = require('immutable');
  var map1 = Immutable.Map({ inMap: Immutable.Map({ inList: Immutable.List([1, 2, 3]) }) });
  // WORKSHOP_START
  // update using updateIn(...) using a push for the inner item
  // WORKSHOP_END
  // FINAL_START
  const map2 = map1.updateIn(['inMap', 'inList'], list => list.push(4));
  // FINAL_END

  expect(map2.toJS())
    .toEqual({
      inMap: {
        inList: [1, 2, 3, 4]
      }
    });
})