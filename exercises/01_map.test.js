const noop = () => { }

test('Import immutable lib', () => {
  // Import Immutable
  expect(Immutable)
    .toBeDefined();
})

test('Create a Map', () => {
  // Create a map using Map(...)
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });
})

test('Get Map property', () => {
  // Get a property using get(...)
  expect(b)
    .toEqual(2);
})

test('update a Map', () => {
  // Get a property using set(...)
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ a: 10, b: 2, c: 3 });
})

test('update a Map using merge', () => {
  // Update and add properties using merge(...)
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ a: 10, b: 2, c: 3, d: 4 });
})

test.only('update a Map using update', () => {
  // Update property "B" to 99, if value is greater than 2 using update(...)
  // hint, you can chain Immutable methods together : set(...).update(...)
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ a: 1, b: 99, c: 3 });

})

test('Delete from map', () => {
  // Delete a property from the map using delete(...)
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });

  expect(map2.toJS())
    .toEqual({ b: 2, c: 3 });
})