export class ChromeStorageManager {
  private legacyStorageKey = "signature";

  private storageKey = "uab-auto-signature";

  private hasLegacyStorage: boolean = false;

  public async getSignature(): Promise<Signature | null> {
    let storage = await chrome.storage.sync.get();

    if (storage[this.legacyStorageKey]) {
      this.hasLegacyStorage = true;
    }

    if (!storage[this.storageKey] && this.hasLegacyStorage) {
      const legacySignature = storage[this.legacyStorageKey] as LegacySignature;
      const convertedSignature: Signature = {
        global: {
          fontFamily: storage[this.legacyStorageKey].fontFamily,
          color: "#000000",
        },
        parts: {
          message: {
            value: legacySignature.message.value,
            color: legacySignature.message.color,
            size: legacySignature.message.size,
          },
          title: {
            value: legacySignature.title.value,
            color: legacySignature.title.color,
            size: legacySignature.title.size,
          },
          subtitle: {
            value: legacySignature.subtitle.value,
            color: legacySignature.subtitle.color,
            size: legacySignature.subtitle.size,
          },
          paragraph: {
            value: legacySignature.paragraph.value,
            color: legacySignature.paragraph.color,
            size: legacySignature.paragraph.size,
          },
        },
        htmlBox: legacySignature.htmlBox,
      };

      await this.saveSignature(convertedSignature);

      return convertedSignature;
    }

    return storage[this.storageKey] || null;
  }

  public async saveSignature(signature: Signature): Promise<void> {
    if (this.hasLegacyStorage) {
      await chrome.storage.sync.remove(this.legacyStorageKey);
    }

    await chrome.storage.sync.set({ [this.storageKey]: signature });
  }
}
