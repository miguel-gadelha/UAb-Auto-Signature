import { Component } from "preact";

import { AuthorBox } from "../components/author-box";
import { GlobalConfigRow } from "../components/global-config-row";
import { Header } from "../components/header";
import { PartsForm } from "../components/parts-form";
import { Card } from "../components/ui/card";
import { InputBox } from "../components/input-box";
import { ButtonsRow } from "../components/buttons-row";
import { ChromeStorageManager } from "../services/chrome-storage-manager";
import { PreviewBox } from "../components/preview-box";

export class ConfigPopup extends Component<
  {},
  Signature & { activePreview: boolean; loading: boolean }
> {
  private storageManager = new ChromeStorageManager();

  constructor() {
    super();
    this.state = {
      global: {
        fontFamily: "trebuchet, sans-serif",
        color: "#000000",
      },
      parts: {
        message: {
          value: "",
          color: "#000000",
          size: 14,
        },
        title: {
          value: "",
          color: "#000000",
          size: 14,
        },
        subtitle: {
          value: "",
          color: "#000000",
          size: 12,
        },
        paragraph: {
          value: "",
          color: "#000000",
          size: 10,
        },
      },
      htmlBox: "",
      activePreview: false,
      loading: false,
    };
  }

  async componentDidMount() {
    const signature = await this.storageManager.getSignature();

    if (Object.keys(signature).length > 0) {
      this.setState({ ...signature, activePreview: false });
    }
  }

  handlePartsChange = (parts: Record<SignaturePart, SignaturePartSettings>) => {
    this.setState({ parts });
  };

  handlePreviewClick = () => {
    this.setState((state) => ({
      ...state,
      activePreview: !state.activePreview,
    }));
  };

  handleBackClick = () => {
    this.setState({ activePreview: false });
  };

  handleSaveClick = async () => {
    const signature = { ...this.state };
    delete signature.activePreview;

    this.setState({ loading: true });

    await this.storageManager.saveSignature(signature);

    this.setState({ loading: false });

    window.close();
  };

  handleGlobalColorChange = (color: string) => {
    this.setState((prevState) => {
      const updatedParts = Object.keys(prevState.parts).reduce((acc, part) => {
        acc[part] = { ...prevState.parts[part], color };
        return acc;
      }, {} as Record<SignaturePart, SignaturePartSettings>);
      return { global: { ...prevState.global, color }, parts: updatedParts };
    });
  };

  handleGlobalFontFamilyChange = (fontFamily: string) => {
    this.setState({ global: { ...this.state.global, fontFamily } });
  };

  handleHtmlBoxChange = (htmlBox: string) => {
    this.setState({ htmlBox });
  };

  render() {
    return (
      <div>
        <Card>
          <Header />
          <GlobalConfigRow
            class="mb-4"
            fontFamily={this.state.global.fontFamily}
            color={this.state.global.color}
            colorDisabled={false}
            fontFamilyDisabled={false}
            onChangeFontFamily={this.handleGlobalFontFamilyChange}
            onChangeColor={this.handleGlobalColorChange}
          />
          <PartsForm
            signatureParts={this.state.parts}
            onPartsChange={this.handlePartsChange}
          />
          {this.state.activePreview ? (
            <PreviewBox {...this.state} />
          ) : (
            <InputBox
              label="Message"
              value={this.state.htmlBox.toString()}
              onChange={this.handleHtmlBoxChange}
            />
          )}
          <ButtonsRow
            loading={this.state.loading}
            primaryText="Save"
            secondaryText={this.state.activePreview ? "Back" : "Preview"}
            onPrimaryClick={this.handleSaveClick}
            onSecondaryClick={this.handlePreviewClick}
          />
          <AuthorBox />
        </Card>
      </div>
    );
  }
}
