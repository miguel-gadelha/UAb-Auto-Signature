import { InputColor } from "./ui/input-color";
import { InputText } from "./ui/input-text";
import { Select } from "./ui/select";

export function PartInput(props: {
  label: string;
  value: string;
  color: string;
  size: number;
  helperText?: string;
  onValueChange?: (value: string) => void;
  onSettingsChange?: (
    setting: keyof SignaturePartSettings,
    value: string
  ) => void;
}) {
  const fontSizes = [
    { value: 4 },
    { value: 6 },
    { value: 8 },
    { value: 10 },
    { value: 12 },
    { value: 14 },
    { value: 16 },
  ];

  const handleValueChange = (value: string) => {
    props.onValueChange?.(value);
  };

  const handleSettingsChange = (
    setting: keyof SignaturePartSettings,
    value: string
  ) => {
    props.onSettingsChange?.(setting, value);
  };

  const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div class="block [&:not(:last-child)]:mb-2">
      <div class="flex flex-row gap-2 pt-2 ">
        <InputText
          value={props.value}
          placeholder={capitalize(props.label)}
          onChange={handleValueChange}
        />
        <InputColor
          value={props.color}
          size="sm"
          onChange={(value) => {
            handleSettingsChange("color", value);
          }}
        />
        <Select
          size="sm"
          options={fontSizes}
          value={props.size}
          onChange={(value) => {
            handleSettingsChange("size", value);
          }}
        />
      </div>
      {props.helperText && (
        <aside class="font-light leading-relaxed mx-auto text-slate-400 text-xs pl-1">
          {props.helperText}
        </aside>
      )}
    </div>
  );
}
