import { render } from "preact";
import { SignatureTemplate } from "../pages/signatureTemplate";
import { ChromeStorageManager } from "./chrome-storage-manager";

class AutoSign {
  private url: string;

  private queryString: URLSearchParams;

  private targetTextInput: HTMLElement;

  private validPage: boolean;

  private storageManager: ChromeStorageManager;

  constructor(storageManager: ChromeStorageManager) {
    this.storageManager = storageManager;

    this.url = window.location.search;
    this.queryString = new URLSearchParams(this.url);
    this.targetTextInput = this.getTargetTextInput();
    this.validPage =
      !!this.queryString.get("reply") && !!this.queryString.get("forum");
  }

  private getTargetTextInput() {
    if (document.getElementById("wmd-input")) {
      return document.getElementById("wmd-input");
    } else if (document.getElementById("id_messageeditable")) {
      return document.getElementById("id_messageeditable");
    } else {
      throw new Error("Target text input not found");
    }
  }

  public async sign() {
    // if (!this.validPage) {
    //   return;
    // }

    const signature = await this.storageManager.getSignature();

    if (!signature) {
      return;
    }

    // Clear the target element before rendering
    this.targetTextInput.innerHTML = "";

    // Render the Preact component into the target element
    render(<SignatureTemplate {...signature} />, this.targetTextInput);
  }
}

console.log("autoSign");

const autoSign = new AutoSign(new ChromeStorageManager());

autoSign.sign();
