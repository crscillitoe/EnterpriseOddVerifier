import { EnterpriseOddVerifierFactoryInterface } from "../../Types/EnterpriseOddVerifierFactoryInterface";

export abstract class AbstractEnterpriseOddVerifierFactory<T>
  implements EnterpriseOddVerifierFactoryInterface<T> {
  BuildObject(): Promise<T> {
    throw new Error(`This error should never be thrown.

    If you see this error, that means that a subclass of
    AbstractEnterpriseOddVerifierFactory has failed to hold
    its end of the contract in overriding the BuildObject method.

    Furthermore, this error is a testament to our own failure
    as developers, and as such should be treated as a form of
    direct ridicule. If you see this message, please open
    open a ticket IMMEDIATELY on our repository found at
    https://github.com/crscillitoe/EnterpriseOddVerifier

    Additionally, this error is atomic.
    `);
  }
  DestroyObject(ToDestroy: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
