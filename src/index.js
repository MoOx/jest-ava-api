import assert from "assert"

// @todo cover ava api
// https://github.com/avajs/ava#api
const todo = () => {
  console.log("@todo")
  assert(false)
}

const helpers = {
  pass: () => assert(true),
  fail: () => assert(false),
  truthy: (value) => expect(value).toBeTruthy(),
  falsy: (value) => expect(value).toBeFalsy(),
  true: (value) => expect(value).toBe(true),
  false: (value) => expect(value).toBe(false),
  is: (value, expected) => expect(value).toBe(expected),
  not: (value, expected) => expect(value).not.toBe(expected),
  deepEqual: (value, expected) => expect(value).toEqual(expected),
  notDeepEqual: (value, expected) => expect(value).not.toEqual(expected),
  throws: (fn) => expect(fn).toThrow(),
  notThrows: (fn) => expect(fn).not.toThrow(),
  regex: (/* contents, regex*/) => todo,
  notRegex: (/* contents, regex*/) => todo,
  ifError: (/* error*/) => todo,
}

const test = (message, cb) => {
  it(message, () => cb(helpers))
}

test.serial = todo
test.cb = todo
test.only = todo
test.skip = todo
test.todo = (message) => {
  it(message, () => {
    console.log("@todo", message)
    assert(true)
  })
}
test.failing = todo
test.before = todo
test.after = todo
test.beforeEach = todo
test.afterEach = todo

export default test
