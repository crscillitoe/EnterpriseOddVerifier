import { EnterpriseOddVerifierFactoryEncapsulator } from "./EnterpriseOddVeriferFactoryEncapsulator";
import { CannotDefineOddError } from "../Errors/CannotDefineOddError";
import { numberLiteralTypeAnnotation } from "@babel/types";
import { EnterpriseOddVerifierNumberGenerator } from "../Handlers/EnterpriseOddVerifierNumberGenerator";

test("Encapsulator can instantiate a class", async () => {
  const Encapsulator = new EnterpriseOddVerifierFactoryEncapsulator<
    CannotDefineOddError
  >(CannotDefineOddError);
  const Error = await Encapsulator.BuildObject();

  expect(Error).toBeInstanceOf(CannotDefineOddError);
});

test("Encapsulator can instantiate multiple classes", async () => {
  const FirstEncapsulator = new EnterpriseOddVerifierFactoryEncapsulator<
    CannotDefineOddError
  >(CannotDefineOddError);

  const Error = await FirstEncapsulator.BuildObject();
  expect(Error).toBeInstanceOf(CannotDefineOddError);

  const SecondEncapsulator = new EnterpriseOddVerifierFactoryEncapsulator<
    EnterpriseOddVerifierNumberGenerator
  >(EnterpriseOddVerifierNumberGenerator);

  const Generator = await SecondEncapsulator.BuildObject();
  expect(Generator).toBeInstanceOf(EnterpriseOddVerifierNumberGenerator);
});
