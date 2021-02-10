import { RectRotate } from "../src";

test("test -1", () => {
  const rotate = new RectRotate(100, 0, 0, 0);
  expect(rotate.getRotate(100, 100)).toEqual(45);
  // TODO:
  expect(rotate.getRotate(100, -100)).toEqual(45);
});
