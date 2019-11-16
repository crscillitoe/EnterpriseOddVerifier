import { CannotDefineOddErrorFactory } from "../Factories/Errors/CannotDefineOddErrorFactory";
import { IsOdd } from "../Prototypes/EnterpriseOddVerifierIsOddPrototype";

export class EnterpriseOddVerifierPrototypeInserter<T> {
  constructor() {
    try {
      const that = this;
      Object.prototype.isOdd = function() {
        return IsOdd(this);
      };
    } catch (CaughtError) {
      const ErrorFactory = new CannotDefineOddErrorFactory();
      const Error = ErrorFactory.BuildObjectWithSpecificErrorMessage(
        CaughtError.message
      );
      throw Error;
    }
  }
}
