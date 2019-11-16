export class EnterpriseOddVerifierGarbageCollectorSingleton {
  static Queue: EnterpriseOddVerifierGarbageCollectorSingletonQueueObject[];

  /**
   * Given an item that the user wishes to be deleted,
   * the `EnterpriseOddVerifierGarbageCollectorSingleton`
   * will mark the item as ready for deletion, and signal
   * to its' handler that new items are ready to be deleted.
   *
   * Additionally, `QueueItemForDeletion()` is atomic.
   *
   * @param Item The item to queue up for deletion
   */
  static async QueueItemForDeletion(
    Item: EnterpriseOddVerifierGarbageCollectorSingletonQueueObject
  ): Promise<boolean> {
    if (this.Queue == undefined) {
      this.Queue = [];
    }

    this.Queue.push(Item);
    return this.HandleQueue();
  }

  private static async HandleQueue(): Promise<boolean> {
    let Item = this.Queue.pop();

    Object.keys(Item.Item).forEach(key => {
      delete Item.Item[key];
    });

    return Promise.resolve(true);
  }
}

export interface EnterpriseOddVerifierGarbageCollectorSingletonQueueObject {
  Item: Object;
}
