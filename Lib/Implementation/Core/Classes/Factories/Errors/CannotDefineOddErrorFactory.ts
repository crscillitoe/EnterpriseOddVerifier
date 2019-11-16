import { CannotDefineOddError } from "../../Errors/CannotDefineOddError";
import { AbstractEnterpriseOddVerifierFactory } from "../../Abstract/AbstractEnterpriseOddVerifierFactory";

export class CannotDefineOddErrorFactory extends AbstractEnterpriseOddVerifierFactory<
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
