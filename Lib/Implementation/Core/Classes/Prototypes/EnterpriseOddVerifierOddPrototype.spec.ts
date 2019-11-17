import { EnterpriseOddVerifierPrototypeInserterFactory } from "../Factories/Handlers/EnterpriseOddVerifierPrototypeInserterFactory";
import { tsMethodSignature } from "@babel/types";

beforeEach(async () => {
  const Factory = new EnterpriseOddVerifierPrototypeInserterFactory();
  await Factory.BuildObject();
});

test("IsOdd prototype correctly detects odd number", () => {
  expect((5).isOdd()).toBe(true);
});

test("IsOdd prototype correctly detects not odd number", () => {
  expect((4).isOdd()).toBe(false);
});

test("IsOdd prototype correctly detects odd length string", () => {
  expect("SomeOddLengthString".isOdd()).toBe(true);
});

test("IsOdd prototype correctly detects even length string", () => {
  expect("SomeEvenLengthString".isOdd()).toBe(false);
});

test(`
  IsOdd boolean checks
`, () => {
  expect(true.isOdd()).toBe(true);
  expect(false.isOdd()).toBe(false);
});

test(`
  IsOdd properly works on objects
`, () => {
  const m = {
    Value1: 5,
    Value2: "string"
  };

  expect(m.isOdd()).toBe(true);
});

test(`
  IsOdd properly works on nested objects
`, () => {
  const m = {
    Value1: 5,
    Value2: "string",
    Value3: {
      Value1: 5,
      Value2: "string"
    }
  }; // Total sum: 5 + 6 + 5 + 6 == 22

  expect(m.isOdd()).toBe(false);
});

test(`
  IsOdd properly works on functions
`, () => {
  const m = () => {};
  expect(m.isOdd()).toBe(false);
});
