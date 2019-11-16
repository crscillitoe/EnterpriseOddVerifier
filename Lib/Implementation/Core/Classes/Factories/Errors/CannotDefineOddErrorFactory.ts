import { EnterpriseOddVerifierFactoryInterface } from "../../../Types/EnterpriseOddVerifierFactoryInterface";
import { CannotDefineOddError } from "../../Errors/CannotDefineOddError";
import { EnterpriseOddVerifierGarbageCollectorSingleton } from "../../Handlers/EnterpriseOddVerifierGarbageCollectorSingleton";
import { EnterpriseOddVerifierGarbageCollectorSingletonQueueObject } from "../../../Types/EnterpriseOddVerifierGarbageCollectorSingletonQueueObject";
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
