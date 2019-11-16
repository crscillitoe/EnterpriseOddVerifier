import {
  EnterpriseOddVerifierGarbageCollectorSingleton,
  EnterpriseOddVerifierGarbageCollectorSingletonQueueObject
} from "./EnterpriseOddVerifierGarbageCollectorSingleton";

interface MyTestInterface {
  Item: number;
}

test("Item added to queue gets deleted", async () => {
  const ItemInstance: MyTestInterface = {
    Item: 5
  };

  const QueueObjectWrapper: EnterpriseOddVerifierGarbageCollectorSingletonQueueObject = {
    Item: ItemInstance
  };

  await EnterpriseOddVerifierGarbageCollectorSingleton.QueueItemForDeletion(
    QueueObjectWrapper
  );

  expect(ItemInstance).toBeUndefined();
});
