import { Label } from "./label";

export function InputColor(props: {
  value: string;
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  size?: "sm" | "lg";
}) {
  const sizeClasses =
    props.size === "sm"
      ? "w-[48px] min-w-[48px]"
      : "w-full max-w-sm min-w-[130px]";

  return (
    <div class={sizeClasses}>
      {props.label && <Label>{props.label}</Label>}
      <div class="relative">
        <input
          class="w-full bg-transparent border border-slate-200 rounded-md px-3 py-2 h-10 cursor-pointer disabled:bg-blue-gray-100 hover:border-slate-400  disabled:text-slate-400 disabled:hover:border-slate-200 disabled:cursor-not-allowed"
          type="color"
          value={props.value}
          onChange={(e) => props.onChange((e.target as HTMLInputElement).value)}
          disabled={props.disabled}
        />
        <label class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
          {props.placeholder}
        </label>
      </div>
    </div>
  );
}
