const noop = () => { }

test('Create a Record', () => {
  const { Record } = require('immutable')
  const Person = Record({
    firstName: null,
    surname: null,
    age: null
  });
  const garry = new Person({ firstName: "Garry", surname: "Taylor" })
  expect(Person)
    .toBeDefined();
  expect(garry.toJS())
    .toEqual({ firstName: "Garry", surname: "Taylor", age: null });
});

test('Get a property', () => {
  const { Record } = require('immutable')
  const Person = Record({ firstName: null, surname: null, age: null });
  const bob = new Person({ firstName: "Bob" });
  const firstName = bob.firstName;
  expect(Person)
    .toBeDefined();
  expect(firstName)
    .toEqual("Bob");
});

test('Update a property', () => {
  const { Record } = require('immutable')
  const Person = Record({ firstName: null, surname: null, age: null });
  const bob = new Person({ firstName: "Bob", surname: "Dylan", age: 75 });
  const bobJuniour = bob.set("age", 21);
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
  const paul = bob.merge({ firstName: "Paul", surname: "Finnen"})
  expect(paul.toJS())
    .toEqual({
      firstName: "Paul",
      "surname": "Finnen",
      "age": 75
    });
});