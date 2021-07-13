const { findMostRepeated } = require("./findMostRepeated");

it("returns emtpy values when passed an empty array", () => {
  expect(findMostRepeated([])).toEqual({
    elements: [],
    repeats: null,
  });
});

it("returns an empty values if there are no items in it that repeat", () => {
  expect(findMostRepeated(["foo", "bar", "hello", "world"])).toEqual({
    elements: [],
    repeats: null,
  });
});

it("returns the items that repeat most and the number of repeats", () => {
  expect(
    findMostRepeated([
      "foo",
      "foo",
      1,
      2,
      3,
      "bar",
      "bar",
      "bar",
      2,
      3,
      4,
      "bar",
      "bar",
      "foo",
    ])
  ).toEqual({
    elements: ["bar"],
    repeats: 5,
  });
});

// needs refactor
