import { InputColor } from "./ui/input-color";
import { Select } from "./ui/select";

export function GlobalConfigRow(props: {
  class?: string;
  fontFamily: string;
  color: string;
  colorDisabled?: boolean;
  fontFamilyDisabled?: boolean;
  onChangeFontFamily?: (value: string) => void;
  onChangeColor?: (value: string) => void;
}) {
  return (
    <div class={`flex flex-col  justify-between w-full ${props.class}`}>
      <h4 class="text-lg font-medium text-slate-700 mb-2">Settings</h4>
      <div class="flex flex-row gap-2 items-center justify-between w-full mb-1">
        <Select
          disabled={props.fontFamilyDisabled}
          label="Font Family"
          options={[
            { value: "arial, sans-serif", label: "Arial" },
            { value: "times, serif", label: "Times" },
            { value: "courier, monospace", label: "Courier" },
            { value: "georgia, serif", label: "Georgia" },
            { value: "verdana, sans-serif", label: "Verdana" },
            { value: "trebuchet, sans-serif", label: "Trebuchet" },
          ]}
          value={props.fontFamily}
          onChange={props.onChangeFontFamily}
        />
        <InputColor
          label="Color"
          value={props.color}
          disabled={props.colorDisabled}
          onChange={props.onChangeColor}
        />
      </div>
      <p class="text-xs text-slate-500">
        You can change the settings for each individual part below.
      </p>
    </div>
  );
}
