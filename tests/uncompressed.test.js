const uncompress = require("../problems/uncompress")

test("'2c3a1t should return 'ccaaat'", () => {
  expect( uncompress('2c3a1t') ).toBe('ccaaat')
})

test("'4s2b' should return 'ssssbb'", () => {
  expect(uncompress("4s2b")).toBe("ssssbb")
})

test("'2p1o5p' should return 'ppoppppp'", () => {
  expect(uncompress("2p1o5p")).toBe("ppoppppp")
})

test("'3n12e2z' should be 'nnneeeeeeeeeeeezz'", () => {
  expect(uncompress("3n12e2z")).toBe("nnneeeeeeeeeeeezz")
})

test("'127y' should be 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'", () => {
  expect(uncompress("127y")).toBe('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
})