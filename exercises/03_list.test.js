const noop = () => { }

test('Import List', () => {
  // Import Immutable List
  // hint: { List }
  expect(List)
    .toBeDefined();
});

test('Create a List', () => {
  // Import Immutable List
  // hint: new List(...)
  expect(todos.toJS())
    .toEqual(
    [
      { "message": "Get beer", "priority": 8 },
      { "message": "Get beers", "priority": 9 },
      { "message": "Get more beers", "priority": 10 }]
    );
});

test('Merge List', () => {
  const { List } = require('immutable')
  const odds = new List([1,3,5,7])
  // Import Immutable List
  // hint: insert(size, value)
  expect(all.toJS())
    .toEqual([1,3,5,7,9]);
});

test('Poping the List', () => {
  const { List } = require('immutable')
  const odds = new List([1,3,5,7])
  // Import Immutable List
  // hint: pop()
  expect(popped.toJS())
    .toEqual([1,3,5]);
});

test('Pushing the List', () => {
  const { List } = require('immutable')
  const odds = new List([1,3,5,7])
  // Import Immutable List
  // hint: push(...)
  expect(pushed.toJS())
    .toEqual([1,3,5,7,9]);
});

test('Merging will override the List', () => {
  const { List } = require('immutable')
  const odds = new List([1,3,5,7,9])
  // Import Immutable List
  // hint: insert(size, value)
  expect(veryOdd.toJS())
    .toEqual([2,4,5,7,9]);
});

test('Update a Record of List', () => {
  const { List, Record } = require('immutable')
  const Todo = Record({ message: null, priority: 5});
  const todos = new List([
    new Todo({ message: "get beer"}),
    new Todo({ message: "get beers", priority: 6}),
    new Todo({ message: "get more beers", priority: 7}),
  ]);
  // Import Immutable List
  // hint: use JS map to find and set to update
  expect(moreTodos.toJS())
    .toEqual([
      { message: "get beer", priority: 5},
      { message: "get beers", priority: 6},
      { message: "get more beers", priority: 10},
    ]);
});

test('remote an Record of List', () => {
  const { List, Record } = require('immutable')
  const Todo = Record({ message: null, priority: 5});
  const todos = new List([
    new Todo({ message: "get beer"}),
    new Todo({ message: "get beers", priority: 6}),
    new Todo({ message: "get more beers", priority: 7}),
  ]);
  // Import Immutable List
  // hint: use JS filter to remote
  expect(moreTodos.toJS())
    .toEqual([
      { message: "get beers", priority: 6},
      { message: "get more beers", priority: 7},
    ]);
});