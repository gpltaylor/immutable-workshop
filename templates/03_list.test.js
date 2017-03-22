// COMMENT_START
/* eslint no-const-assign:0 */
// COMMENT_END
const noop = () => { }

test('Import List', () => {
  // WORKSHOP_START
  // Import Immutable List
  // hint: { List }
  // WORKSHOP_END
  // FINAL_START
  const { List } = require('immutable')
  // FINAL_END
  expect(List)
    .toBeDefined();
});

test('Create a List', () => {
  // WORKSHOP_START
  // Import Immutable List
  // hint: new List(...)
  // WORKSHOP_END
  // FINAL_START
  const { List } = require('immutable')
  const todos = new List([
    { message: "Get beer", priority: 8 },
    { message: "Get beers", priority: 9 },
    { message: "Get more beers", priority: 10 },
  ])
  // FINAL_END
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
    // WORKSHOP_START
  // Import Immutable List
  // hint: insert(size, value)
  // WORKSHOP_END
  // FINAL_START
  const all = odds.insert(odds.size, 9);
  // FINAL_END
  expect(all.toJS())
    .toEqual([1,3,5,7,9]);
});

test('Poping the List', () => {
  const { List } = require('immutable')
  const odds = new List([1,3,5,7])
    // WORKSHOP_START
  // Import Immutable List
  // hint: pop()
  // WORKSHOP_END
  // FINAL_START
  const popped = odds.pop();
  // FINAL_END
  expect(popped.toJS())
    .toEqual([1,3,5]);
});

test('Pushing the List', () => {
  const { List } = require('immutable')
  const odds = new List([1,3,5,7])
    // WORKSHOP_START
  // Import Immutable List
  // hint: push(...)
  // WORKSHOP_END
  // FINAL_START
  const pushed = odds.push(9);
  // FINAL_END
  expect(pushed.toJS())
    .toEqual([1,3,5,7,9]);
});

test('Merging will override the List', () => {
  const { List } = require('immutable')
  const odds = new List([1,3,5,7,9])
    // WORKSHOP_START
  // Import Immutable List
  // hint: insert(size, value)
  // WORKSHOP_END
  // FINAL_START
  const veryOdd = odds.merge([2,4]);
  // FINAL_END
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
    // WORKSHOP_START
  // Import Immutable List
  // hint: use JS map to find and set to update
  // WORKSHOP_END
  // FINAL_START
  const moreTodos = todos.map(item => {
    return item.priority > 6 ? item.set("priority", 10) : item
  });
  // FINAL_END
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
    // WORKSHOP_START
  // Import Immutable List
  // hint: use JS filter to remote
  // WORKSHOP_END
  // FINAL_START
  const moreTodos = todos.filter(item => item.priority !== 5);
  // FINAL_END
  expect(moreTodos.toJS())
    .toEqual([
      { message: "get beers", priority: 6},
      { message: "get more beers", priority: 7},
    ]);
});