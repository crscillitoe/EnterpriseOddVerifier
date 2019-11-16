import { AbstractEnterpriseOddVerifierFactory } from "./AbstractEnterpriseOddVerifierFactory";

class TestClassForAbstractEnterpriseOddVerifierFactory extends AbstractEnterpriseOddVerifierFactory<
  Object
> {}

class TestClassForAbstractEnterpriseOddVerifierFactoryThatCorrectlyImplementsBuildObject extends AbstractEnterpriseOddVerifierFactory<
  TestInterfaceForTheEnterpriseOddVerifierFactory
> {
  BuildObject(): Promise<TestInterfaceForTheEnterpriseOddVerifierFactory> {
    return Promise.resolve(
      new TestInterfaceForTheEnterpriseOddVerifierFactory()
    );
  }
}

class TestInterfaceForTheEnterpriseOddVerifierFactory {
  Item: number;

  constructor() {
    this.Item = 5;
  }
}

test("BuildObject throws the correct error essay", async () => {
  const Essay = `This error should never be thrown.

    If you see this error, that means that a subclass of
    AbstractEnterpriseOddVerifierFactory has failed to hold
    its end of the contract in overriding the BuildObject method.

    Furthermore, this error is a testament to our own failure
    as developers, and as such should be treated as a form of
    direct ridicule. If you see this message, please open
    open a ticket IMMEDIATELY on our repository found at
    https://github.com/crscillitoe/EnterpriseOddVerifier

    Additionally, this error is atomic.
    `;

  const Factory = new TestClassForAbstractEnterpriseOddVerifierFactory();
  try {
    await Factory.BuildObject();
  } catch (ErrorObjectThatWeExpectToContainEssay) {
    expect(ErrorObjectThatWeExpectToContainEssay.message);
  }
});

test(
  "CannotDefineOddErrorFactory properly destroys CannotDefineOddError " +
    "when asked to do so.",
  async () => {
    const Factory = new TestClassForAbstractEnterpriseOddVerifierFactoryThatCorrectlyImplementsBuildObject();
    const ResolvedNumber = await Factory.BuildObject();
    expect(ResolvedNumber).toBeInstanceOf(
      TestInterfaceForTheEnterpriseOddVerifierFactory
    );

    const Deleted = await Factory.DestroyObject(ResolvedNumber);
    expect(Deleted).toBeTruthy();
    expect(ResolvedNumber).toMatchObject({});
  }
);
