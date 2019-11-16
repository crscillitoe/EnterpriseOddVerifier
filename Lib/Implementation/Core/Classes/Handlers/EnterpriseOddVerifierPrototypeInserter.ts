import { EnterpriseOddVerifierPrototypeInterface } from "../../Types/EnterpriseOddVerifierPrototypeInterface";
import { numberLiteralTypeAnnotation } from "@babel/types";
import { CannotDefineOddErrorFactory } from "../Factories/Errors/CannotDefineOddErrorFactory";

export class EnterpriseOddVerifierPrototypeInserter<T>
  implements EnterpriseOddVerifierPrototypeInterface<T> {
  constructor() {
    try {
      const that = this;
      Object.prototype.isOdd = function() {
        return that.IsOdd(this);
      };
    } catch (CaughtError) {
      const ErrorFactory = new CannotDefineOddErrorFactory();
      const Error = ErrorFactory.BuildObjectWithSpecificErrorMessage(
        CaughtError.message
      );
      throw Error;
    }
  }

  IsOdd(PotentiallyOddInputValue: T): boolean {
    return true;
  }

  GenerateNumberFromPotentiallyOddInputValue(
    PotentiallyOddInputValue: T
  ): number {
    throw new Error("Method not implemented.");
  }
}
