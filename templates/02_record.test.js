// COMMENT_START
/* eslint no-const-assign:0 */
// COMMENT_END
const noop = () => { }

test('Create a Record', () => {
  const { Record } = require('immutable')
  const Person = Record({
    firstName: null,
    surname: null,
    age: null
  });
  // WORKSHOP_START
  // Create a new Person called garry, with name "Garry Taylo2"
  // hint: new Person(...)
  // WORKSHOP_END
  // FINAL_START
  const garry = new Person({ firstName: "Garry", surname: "Taylor" })
  // FINAL_END
  expect(Person)
    .toBeDefined();
  expect(garry.toJS())
    .toEqual({ firstName: "Garry", surname: "Taylor", age: null });
});

test('Get a property', () => {
  const { Record } = require('immutable')
  const Person = Record({ firstName: null, surname: null, age: null });
  const bob = new Person({ firstName: "Bob" });
  // WORKSHOP_START
  // Get a value
  // hint: like a normal Object property
  // WORKSHOP_END
  // FINAL_START
  const firstName = bob.firstName;
  // FINAL_END
  expect(Person)
    .toBeDefined();
  expect(firstName)
    .toEqual("Bob");
});

test('Update a property', () => {
  const { Record } = require('immutable')
  const Person = Record({ firstName: null, surname: null, age: null });
  const bob = new Person({ firstName: "Bob", surname: "Dylan", age: 75 });
  // WORKSHOP_START
  // Set a value
  // hint: set({...})
  // WORKSHOP_END
  // FINAL_START
  const bobJuniour = bob.set("age", 21);
  // FINAL_END
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
  // WORKSHOP_START
  // Set a value
  // hint: set({...})
  // WORKSHOP_END
  // FINAL_START
  const paul = bob.merge({ firstName: "Paul", surname: "Finnen"})
  // FINAL_END
  expect(paul.toJS())
    .toEqual({
      firstName: "Paul",
      "surname": "Finnen",
      "age": 75
    });
});