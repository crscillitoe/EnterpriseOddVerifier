import { EnterpriseOddVerifierFactoryInterface } from "../../../Types/EnterpriseOddVerifierFactoryInterface";
import { CannotDefineOddError } from "../../Errors/CannotDefineOddError";
import { EnterpriseOddVerifierGarbageCollectorSingleton } from "../../Handlers/EnterpriseOddVerifierGarbageCollectorSingleton";
import { EnterpriseOddVerifierGarbageCollectorSingletonQueueObject } from "../../../Types/EnterpriseOddVerifierGarbageCollectorSingletonQueueObject";

export class CannotDefineOddErrorFactory
  implements EnterpriseOddVerifierFactoryInterface<CannotDefineOddError> {
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

  DestroyObject(ToDestroy: CannotDefineOddError): Promise<boolean> {
    const ToDelete: EnterpriseOddVerifierGarbageCollectorSingletonQueueObject<CannotDefineOddError> = {
      Item: ToDestroy
    };

    return EnterpriseOddVerifierGarbageCollectorSingleton.QueueItemForDeletion(
      ToDelete
    );
  }
}
