import { PartInput } from "./part-input";

export function PartsForm(props: {
  signatureParts: Record<SignaturePart, SignaturePartSettings>;
  onPartsChange: (parts: Record<SignaturePart, SignaturePartSettings>) => void;
}) {
  const helperTexts = {
    message: "ex: Best regards,",
    title: "ex: Miguel Gadelha",
    subtitle: "ex: Software Developer",
    paragraph: "ex: I am available to freelance work 😉",
  };

  const handlePartChange = (
    part: SignaturePart,
    setting: keyof SignaturePartSettings,
    value: string
  ) => {
    props.onPartsChange({
      ...props.signatureParts,
      [part]: { ...props.signatureParts[part], [setting]: value },
    });
  };

  return (
    <div class="flex flex-col mb-4">
      <h4 class="text-lg font-medium text-slate-700">Signature Parts</h4>

      <div>
        {Object.keys(props.signatureParts).map((part) => (
          <PartInput
            label={part}
            value={props.signatureParts[part].value}
            color={props.signatureParts[part].color}
            size={props.signatureParts[part].size}
            onValueChange={(value) => {
              handlePartChange(part as SignaturePart, "value", value);
            }}
            onSettingsChange={(setting, value) => {
              handlePartChange(part as SignaturePart, setting, value);
            }}
            helperText={helperTexts[part]}
          />
        ))}
      </div>
    </div>
  );
}
