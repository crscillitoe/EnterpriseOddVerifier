export interface EnterpriseOddVerifierGarbageCollectorSingletonQueueObject<
  T extends Object
> {
  /**
   * This is the object that will eventually be deleted when this
   * type is passed into the `EnterpriseOddVerifierGarbageCollectorSingleton`
   */
  Item: T;
}
