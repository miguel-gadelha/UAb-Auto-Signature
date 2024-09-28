type SignaturePart = "message" | "title" | "subtitle" | "paragraph";

type SignaturePartSettings = {
  value: string;
  color: string;
  size: number;
};

interface Signature {
  global: {
    fontFamily: string;
    color: string;
  };
  parts: Record<SignaturePart, SignaturePartSettings>;
  htmlBox: string | HTMLElement;
}

interface LegacySignature {
  fontFamily: string;
  message: SignaturePartSettings;
  title: SignaturePartSettings;
  subtitle: SignaturePartSettings;
  paragraph: SignaturePartSettings;
  htmlBox: any;
}
