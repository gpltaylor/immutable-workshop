const noop = () => {}

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
  expect(map1.toJS())
    .toEqual({ a: 1, b: 2, c: 3 });
})