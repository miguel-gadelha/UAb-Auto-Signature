import { Textarea } from "./ui/textarea";

export function InputBox(props: {
  label: string;
  value: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div class="flex flex-col">
      <h4 class="text-lg font-medium text-slate-700">Custom Input</h4>
      <p class="text-xs text-slate-500 mb-2">
        You can add either text or HTML here:
      </p>

      <Textarea
        value={props.value}
        onChange={props.onChange}
        placeholder="If you add anything here only this input will be used."
      />
    </div>
  );
}
