const noop = () => { }

test('Import List', () => {
  const { List } = require('immutable')
  expect(List)
    .toBeDefined();
});

test('Create a List', () => {
  const { List } = require('immutable')
  const todos = new List([
    { message: "Get beer", priority: 8 },
    { message: "Get beers", priority: 9 },
    { message: "Get more beers", priority: 10 },
  ])
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
  const all = odds.insert(odds.size, 9);
  expect(all.toJS())
    .toEqual([1,3,5,7,9]);
});

test('Poping the List', () => {
  const { List } = require('immutable')
  const odds = new List([1,3,5,7])
  const popped = odds.pop();
  expect(popped.toJS())
    .toEqual([1,3,5]);
});

test('Pushing the List', () => {
  const { List } = require('immutable')
  const odds = new List([1,3,5,7])
  const pushed = odds.push(9);
  expect(pushed.toJS())
    .toEqual([1,3,5,7,9]);
});

test('Merging will override the List', () => {
  const { List } = require('immutable')
  const odds = new List([1,3,5,7,9])
  const veryOdd = odds.merge([2,4]);
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
  const moreTodos = todos.map(item => {
    return item.priority > 6 ? item.set("priority", 10) : item
  });
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
  const moreTodos = todos.filter(item => item.priority !== 5);
  expect(moreTodos.toJS())
    .toEqual([
      { message: "get beers", priority: 6},
      { message: "get more beers", priority: 7},
    ]);
});