const noop = () => { }

test('Create a Record', () => {
  const { Record } = require('immutable')
  const Person = Record({
    firstName: null,
    surname: null,
    age: null
  });
  // Create a new Person called garry, with name "Garry Taylo2"
  // hint: new Person(...)
  expect(Person)
    .toBeDefined();
  expect(garry.toJS())
    .toEqual({ firstName: "Garry", surname: "Taylor", age: null });
});

test('Get a property', () => {
  const { Record } = require('immutable')
  const Person = Record({ firstName: null, surname: null, age: null });
  const bob = new Person({ firstName: "Bob" });
  // Get a value
  // hint: like a normal Object property
  expect(Person)
    .toBeDefined();
  expect(firstName)
    .toEqual("Bob");
});

test('Update a property', () => {
  const { Record } = require('immutable')
  const Person = Record({ firstName: null, surname: null, age: null });
  const bob = new Person({ firstName: "Bob", surname: "Dylan", age: 75 });
  // Set a value
  // hint: set({...})
  expect(bobJuniour.toJS())
    .toEqual({
      firstName: "Bob",
      "surname": "Dylan",
      "age": 21
    });
});

test('Update multiple property', () => {
  const { Record } = require('immutable')
  const Person = Record({ firstName: null, surname: null, age: null });
  const bob = new Person({ firstName: "Bob", surname: "Dylan", age: 75 });
  // Set a value
  // hint: set({...})
  expect(paul.toJS())
    .toEqual({
      firstName: "Paul",
      "surname": "Finnen",
      "age": 75
    });
});