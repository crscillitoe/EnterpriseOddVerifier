import { EnterpriseOddVerifierPrototypeInserterFactory } from "../Factories/Handlers/EnterpriseOddVerifierPrototypeInserterFactory";

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

/* TODO: Uncomment these test cases when we are ready
   to verify that the function prototype works on non-numeric
   values. This work is currently blocked by our epic related
   tothe EnterpriseOddVerifierNumberGenerator, which is in turn
   blocked by our epic to introduce the EnterpriseOddVerifierFactoryEncapsulator
*/

//test("IsOdd prototype correctly detects odd length string", () => {
//  expect("SomeOddLengthString".isOdd()).toBe(true);
//});
//
// test("IsOdd prototype correctly detects even length string", () => {
//   expect("SomeEvenLengthString".isOdd()).toBe(false);
// });
