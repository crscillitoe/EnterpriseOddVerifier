import { CannotDefineOddError } from "../../Errors/CannotDefineOddError";
import { AbstractEnterpriseOddVerifierFactory } from "../../Abstract/AbstractEnterpriseOddVerifierFactory";
import { ConstructibleEnterpriseOddVerifierFactory } from "../ConstructibleEnterpriseOddVerifierFactory";

export class CannotDefineOddErrorFactory extends ConstructibleEnterpriseOddVerifierFactory<
  CannotDefineOddError
> {
  BuildObject(): Promise<CannotDefineOddError> {
    return this
      .BuildObjectWithSpecificErrorMessage
      /* Argument omitted intentionally */
      ();
  }

  BuildObjectWithSpecificErrorMessage(
    SpecificErrorMessage: string = ""
  ): Promise<CannotDefineOddError> {
    return Promise.resolve(new CannotDefineOddError(SpecificErrorMessage));
  }
}
