import { EnterpriseOddVerifierGarbageCollectorSingleton } from "./EnterpriseOddVerifierGarbageCollectorSingleton";
import { EnterpriseOddVerifierGarbageCollectorSingletonQueueObject } from "../../Types/EnterpriseOddVerifierGarbageCollectorSingletonQueueObject";
import { EnterpriseOddVerifierDeletionTestInterfaceWithNumber } from "../../Types/EnterpriseOddVerifierDeletionTestInterfaceWithNumber";

test("Item added to queue gets deleted", async () => {
  const ItemInstance: EnterpriseOddVerifierDeletionTestInterfaceWithNumber = {
    Item: 5
  };

  const QueueObjectWrapper: EnterpriseOddVerifierGarbageCollectorSingletonQueueObject<EnterpriseOddVerifierDeletionTestInterfaceWithNumber> = {
    Item: ItemInstance
  };

  await EnterpriseOddVerifierGarbageCollectorSingleton.QueueItemForDeletion(
    QueueObjectWrapper
  );

  expect(ItemInstance).toMatchObject({});
});
