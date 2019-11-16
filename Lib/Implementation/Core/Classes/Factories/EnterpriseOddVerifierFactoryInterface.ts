export interface EnterpriseOddVerifierFactoryInterface<T> {
    /**
     * When the `BuildObject()` function is invoked
     * by a parent class N, an object of type `T` (the
     * defined generic type of the `EnterpriseOddVerifierFactoryInterface`)
     * will be returned to said parent class N, such that
     * T is a valid object, ready to be properly interfaced with.
     *
     * Furthermore, this function guarantees that the
     * returned object will not contain any malformed data.
     *
     * Additionally, `BuildObject()` is atomic.
     */
    BuildObject(): Promise<T>;

    /**
     * When the `DestroyObject()` function is invoked
     * by a parent class N, the object `ToDestroy` passed
     * in to this function will be inserted onto the queue
     * of objects to be deleted, and will be deleted as soon
     * as possible by the `EnterpriseOddVerifierGarbageCollectorSingleton`.
     *
     * Furthermore, this function guarantees that the inserted
     * object will be deleted eventually.
     *
     * Additionally, `DestroyObject()` is atomic.
     *
     * @param ToDestroy The object that needs to be destroyed
     * @return `true` on success.
     * @error on failure
     */
    DestroyObject(ToDestroy: T): Promise<boolean>;
}